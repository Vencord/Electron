/*
 * SPDX-License-Identifier: GPL-3.0
 * Vencord Desktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { contextBridge, ipcRenderer } from "electron";
import { IpcEvents } from "shared/IpcEvents";

contextBridge.exposeInMainWorld("Updater", {
    getLatestVersion: () => ipcRenderer.invoke(IpcEvents.UPDATER_GET_LATEST_VERSION)
});
