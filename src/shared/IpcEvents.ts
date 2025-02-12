/*
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export const enum IpcEvents {
    GET_VENCORD_PRELOAD_FILE = "VCD_GET_VC_PRELOAD_FILE",
    GET_VENCORD_RENDERER_SCRIPT = "VCD_GET_VC_RENDERER_SCRIPT",
    GET_RENDERER_SCRIPT = "VCD_GET_RENDERER_SCRIPT",
    GET_RENDERER_CSS_FILE = "VCD_GET_RENDERER_CSS_FILE",

    GET_VERSION = "VCD_GET_VERSION",
    SUPPORTS_WINDOWS_TRANSPARENCY = "VCD_SUPPORTS_WINDOWS_TRANSPARENCY",

    RELAUNCH = "VCD_RELAUNCH",
    CLOSE = "VCD_CLOSE",
    FOCUS = "VCD_FOCUS",
    MINIMIZE = "VCD_MINIMIZE",
    MAXIMIZE = "VCD_MAXIMIZE",

    SHOW_ITEM_IN_FOLDER = "VCD_SHOW_ITEM_IN_FOLDER",
    GET_SETTINGS = "VCD_GET_SETTINGS",
    SET_SETTINGS = "VCD_SET_SETTINGS",

    GET_VENCORD_DIR = "VCD_GET_VENCORD_DIR",
    SELECT_VENCORD_DIR = "VCD_SELECT_VENCORD_DIR",
    SELECT_IMAGE_PATH = "VCD_SELECT_IMAGE_PATH",

    UPDATER_GET_DATA = "VCD_UPDATER_GET_DATA",
    UPDATER_DOWNLOAD = "VCD_UPDATER_DOWNLOAD",
    UPDATE_IGNORE = "VCD_UPDATE_IGNORE",

    SPELLCHECK_GET_AVAILABLE_LANGUAGES = "VCD_SPELLCHECK_GET_AVAILABLE_LANGUAGES",
    SPELLCHECK_RESULT = "VCD_SPELLCHECK_RESULT",
    SPELLCHECK_REPLACE_MISSPELLING = "VCD_SPELLCHECK_REPLACE_MISSPELLING",
    SPELLCHECK_ADD_TO_DICTIONARY = "VCD_SPELLCHECK_ADD_TO_DICTIONARY",

    SET_BADGE_COUNT = "VCD_SET_BADGE_COUNT",

    CAPTURER_GET_LARGE_THUMBNAIL = "VCD_CAPTURER_GET_LARGE_THUMBNAIL",

    AUTOSTART_ENABLED = "VCD_AUTOSTART_ENABLED",
    ENABLE_AUTOSTART = "VCD_ENABLE_AUTOSTART",
    DISABLE_AUTOSTART = "VCD_DISABLE_AUTOSTART",

    VIRT_MIC_LIST = "VCD_VIRT_MIC_LIST",
    VIRT_MIC_START = "VCD_VIRT_MIC_START",
    VIRT_MIC_START_SYSTEM = "VCD_VIRT_MIC_START_ALL",
    VIRT_MIC_STOP = "VCD_VIRT_MIC_STOP",

    ARRPC_ACTIVITY = "VCD_ARRPC_ACTIVITY",

    CLIPBOARD_COPY_IMAGE = "VCD_CLIPBOARD_COPY_IMAGE",

    DEBUG_LAUNCH_GPU = "VCD_DEBUG_LAUNCH_GPU",
    DEBUG_LAUNCH_WEBRTC_INTERNALS = "VCD_DEBUG_LAUNCH_WEBRTC",

    IPC_COMMAND = "VCD_IPC_COMMAND"
}

export const enum IpcCommands {
    RPC_ACTIVITY = "rpc:activity",
    RPC_INVITE = "rpc:invite",
    RPC_DEEP_LINK = "rpc:link",
    NAVIGATE_SETTINGS = "navigate:settings",
    GET_LANGUAGES = "navigator.languages"
}
