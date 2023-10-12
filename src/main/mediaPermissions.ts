/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { session, systemPreferences } from "electron";

export function registerMediaPermissionsHandler() {
    if (process.platform !== "darwin") return;

    session.defaultSession.setPermissionRequestHandler(async (_webContents, permission, callback, details) => {
        let granted = true;

        if (details.mediaTypes?.includes("audio")) {
            granted = await systemPreferences.askForMediaAccess("microphone");
        }
        if (details.mediaTypes?.includes("video")) {
            granted &&= await systemPreferences.askForMediaAccess("camera");
        }

        callback(granted);
    });
}
