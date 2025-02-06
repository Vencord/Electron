/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { addPatch } from "./shared";

addPatch({
    patches: [
        {
            find: ".DEEP_LINK]:{",
            replacement: [
                {
                    // TODO: Fix eslint rule
                    // eslint-disable-next-line no-useless-escape
                    match: /(?<=\.DEEP_LINK.{0,200}?)\i\.\i\.focus\(\)/,
                    replace: "VesktopNative.win.focus()"
                }
            ]
        }
    ]
});
