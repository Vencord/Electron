/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { app } from "electron";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

interface AutoStart {
    isEnabled(): boolean;
    wasAutoStarted(): boolean;
    enable(): void;
    disable(): void;
}

const isFlatpak = process.env.FLATPAK_ID !== undefined;

function makeAutoStartLinux(): AutoStart {
    const configDir = process.env.XDG_CONFIG_HOME || join(process.env.HOME!, ".config");
    const dir = join(configDir, "autostart");
    const file = join(dir, "vencord.desktop");

    return {
        isEnabled: () => existsSync(file), // TODO: flatpak
        wasAutoStarted: () => process.argv.includes("--autostart"),
        enable() {
            if (isFlatpak) {
            } else {
                const desktopFile = `
[Desktop Entry]
Type=Application
Version=1.0
Name=Vencord
Comment=Vencord autostart script
Exec=${process.execPath} --autostart
Terminal=false
StartupNotify=false
`.trim();

                mkdirSync(dir, { recursive: true });
                writeFileSync(file, desktopFile);
            }
        },
        disable: () => {
            if (isFlatpak) {
            } else {
                rmSync(file, { force: true });
            }
        }
    };
}

const autoStartWindowsMac: AutoStart = {
    isEnabled: () => app.getLoginItemSettings().openAtLogin,
    wasAutoStarted: () => app.getLoginItemSettings().wasOpenedAtLogin,
    enable: () => app.setLoginItemSettings({ openAtLogin: true }),
    disable: () => app.setLoginItemSettings({ openAtLogin: false })
};

export const autoStart = process.platform === "linux" ? makeAutoStartLinux() : autoStartWindowsMac;
