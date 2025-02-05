/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { findLazy, findStoreLazy, onceReady } from "@vencord/types/webpack";
import { FluxDispatcher, InviteActions } from "@vencord/types/webpack/common";
import { IpcCommands } from "shared/IpcEvents";

import { onIpcCommand } from "./ipcCommands";
import { Settings } from "./settings";

const StreamerModeStore = findStoreLazy("StreamerModeStore");

const arRPC = Vencord.Plugins.plugins["WebRichPresence (arRPC)"] as any as {
    handleEvent(e: MessageEvent): void;
};

onIpcCommand(IpcCommands.RPC_ACTIVITY, async jsonData => {
    if (!Settings.store.arRPC) return;

    await onceReady;

    const data = JSON.parse(jsonData);

    if (data.socketId === "STREAMERMODE" && StreamerModeStore.autoToggle) {
        FluxDispatcher.dispatch({
            type: "STREAMER_MODE_UPDATE",
            key: "enabled",
            value: data.activity?.application_id === "STREAMERMODE"
        });
        return;
    }

    arRPC.handleEvent(new MessageEvent("message", { data: jsonData }));
});

onIpcCommand(IpcCommands.RPC_INVITE, async code => {
    const { invite } = await InviteActions.resolveInvite(code, "Desktop Modal");
    if (!invite) return false;

    VesktopNative.win.focus();

    FluxDispatcher.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite,
        code,
        context: "APP"
    });

    return true;
});

const { DEEP_LINK } = findLazy(m => m.DEEP_LINK?.handler);

onIpcCommand(IpcCommands.RPC_DEEP_LINK, async data => {
    try {
        DEEP_LINK.handler({ args: data });
        return true;
    } catch (err) {
        console.error("[RPC]", "Failed to open deep link:", err, data);
        return false;
    }
});
