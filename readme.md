# GrvSqncBrk
![Screenshot](screenshot.jpg)

Blogging theme for [Grav](https://getgrav.org) CMS used for publishing [SqncBrk](https://sqncbrk.com).
## Usage
1. **Customization**. It's hard to imagine a scenario where this theme can be uses as-is by any publication except SqncBrk. Theme styling is written in [SASS syntax](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax), so you will need to compile your `css/style.css` after you're done modifying `sass/style.sass`.
2. **Changing the logo**. Look for `h1` in `sass/style.sass`; change the `background-image` property (different versions of the logo can be used for mobile, tablet, desktop and desktop HD breakpoints).
3. **Fonts**. SqncBrk uses [Museo](https://www.exljbris.com/museo.html) and [Museo Sans](https://www.exljbris.com/museosans.html) by exljbris Font Foundry. These are commercially licensed fonts, so they're not included with GrvSqncBrk.
4. **Custom stylesheets**. Add `customcss: true` to page front matter. The stylesheet should be placed in the page directory and named `custom.css`.
5. **Cover images**. Add `cover.jpg` to page directory. If you want to use video for cover additionally add `videocover: true` to page front matter and add `cover.webm` and `cover.mp4` to page directory.
6. **Post layout**. Theme includes two main output styles. Include your main article sections in `div class="article-area" markdown="1"` and alternating incuts in `div class="highlight" markdown="1"`. Sidenotes should be placed in `aside class="caption"`. For using sidenotes inside `highlight` sections wrap them with the corresponding content in `div class="withcaption"`.
7. **Full bleed highlights**. Add `nogutter` class to your `div class="highlight"`.
8. **Using [bLazy](https://github.com/dinbror/blazy)**. Refer to bLazy documentation for syntax. Currently SqncBrk uses a plugin to output proper code since it allows access to Grav's `.cropResize()` function.
