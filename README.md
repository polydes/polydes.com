This repository contains the source code for the web content of polydes.com.

polydes.com serves as a [Stencyl extension repository](https://www.stencyl.com/developers/market/#repo). The API for extension repositories is undocumented, but v3 is designed to be easily served as static files. See [NetRepoBackend.java] for the code used to access extension repositories. In order to serve all API versions at once, a .htaccess file is used to rewrite web requests as needed.

The URL used as the extension repository isn't actually accessed by Stencyl. Instead, the following URLs are part of the API:
- `{repository_url}/access`
- `{repository_url}/v{version_number}/...`

This allows the repository url itself, if opened in a web browser, to provide a user-friendly landing page to inform users about the extension repository. In this case, polydes.com provides a browsable listing of the extensions in the repository, including documentation and downloads.

Landing pages and documentation for individual extensions is sourced from the extension's own repository. For example, the content at the page `www.polydes.com/repo/toolset/com.polydes.dialog` is taken from `docs/repo/landing.md` in the `polydes/dialog` repository.

How it works:

- `html/` contains the content root.
- `zola/` contains input for the Zola SSG.
- The `docs/repo` folder from each polydes extension is gathered together and added to the zola content.
- `zola build` gathers all static content into a build folder.
- Files from the `html` folder are written over the build folder.
- Extension metadata and downloads are stored in a different folder, which is symlinked to.
- The site is served.

