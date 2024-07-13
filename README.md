# Equibop [<img src="https://avatars.githubusercontent.com/u/150590884" width="225" align="right" alt="Equibop">](https://github.com/Equicord/Equibop)

[![Equicord](https://img.shields.io/badge/Equicord-green?style=flat)](https://github.com/Equicord/Equibop)
[![Tests](https://github.com/Equicord/Equibop/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/Equicord/Equibop/actions/workflows/test.yml)
[![Discord](https://img.shields.io/discord/1207691698386501634.svg?color=768AD4&label=Discord&logo=discord&logoColor=white)](https://discord.gg/5Xh2W87egW)

Equibop is a fork of [Vesktop](https://github.com/Vencord/Vesktop).

You can join our [discord server](https://discord.gg/5Xh2W87egW) for commits, changes, chat or even support.<br></br>

## Main features

-   Much more lightweight and faster than the official Discord app
-   Linux Screenshare with sound & wayland

**Extra included changes**

-   Equicord preinstalled
-   Custom Splash animations from [this PR](https://github.com/Vencord/Vesktop/pull/355)

**Not yet supported**:

-   Global Keybinds

## Installing

### Windows

If you don't know the difference, pick the Installer.

-   [Installer](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-Setup-2.0.0.exe)
-   Portable
    -   [x64 / amd64](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-2.0.0-win.zip)
    -   [arm64](https://github.com/Equicord/Equibop/releases/download/v2.0.0/Equibop-2.0.0-arm64-win.zip)

### Mac

If you don't know the difference, pick the Intel build.

-   [Equibop.dmg](https://github.com/Equicord/Equibop/releases/download/v2.0.0/Equibop-2.0.0-universal.dmg)

### Linux

If you don't know the difference, pick amd64.

-   amd64 / x86_64
    -   [AppImage](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-2.0.0.AppImage)
    -   [Ubuntu/Debian (.deb)](https://github.com/Equicord/Equibop/releases/latest/download/equibop_2.0.0_amd64.deb)
    -   [Fedora/RHEL (.rpm)](https://github.com/Equicord/Equibop/releases/latest/download/equibop-2.0.0.x86_64.rpm)
    -   [tarball](https://github.com/Equicord/Equibop/releases/latest/download/equibop-2.0.0.tar.gz)
-   arm64 / aarch64
    -   [AppImage](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-2.0.0-arm64.AppImage)
    -   [Ubuntu/Debian (.deb)](https://github.com/Equicord/Equibop/releases/latest/download/equibop_2.0.0_arm64.deb)
    -   [Fedora/RHEL (.rpm)](https://github.com/Equicord/Equibop/releases/latest/download/equibop-2.0.0.aarch64.rpm)
    -   [tarball](https://github.com/Equicord/Equibop/releases/latest/download/equibop-2.0.0-arm64.tar.gz)

## Building from Source

Packaging will create builds in the dist/ folder

> [!NOTE]
> On Windows, if you run the test script, you will get test errors about venmic, you can ignore these as it's a linux only module.

```sh
git clone https://github.com/Equicord/Equibop
cd Equibop

# Install Dependencies
pnpm i

# Either run it without packaging
pnpm start

# Or package
pnpm package

# Or only build the pacman target
pnpm package --linux pacman

# Or package to a directory only
pnpm package:dir
```
