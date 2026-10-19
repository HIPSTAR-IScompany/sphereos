# SphereOS

Japanese-first documentation with en-US reference manuscripts. [日本語正本](README.md).

## Read

[Japanese entrance](docs/start/index.md) / [English entrance](i18n/en/docusaurus-plugin-content-docs/current/start/index.md).

Author: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ. Publication organization: HIPSTAR-IScompany.

The 2026-10-19 initial batch is a PARTIAL_PROJECTION. Full legacy content and asset migration remain incomplete. Git source, build, Sakura publication, and DOI registration have independent states. The CI PUBLICATION_URL sets the target origin.

## Sources and authority

The [Manifest](https://github.com/saitoomituru/ZeroRoomLab-manifest) retains shared policies and research sources. [SphereOS Atlantis](https://github.com/saitoomituru/SphereOS-Atlantis) and component repositories retain implementation authority. The verified Fold NIC repository is [saitoomituru/fold-nic](https://github.com/saitoomituru/fold-nic).

Read the [source map](sources/publication-batch-2026-10-19.json), [language policy](i18n/en/docusaurus-plugin-content-docs/current/operations/publication-policy.md), and [migration record](migration/README.md). MAGI follows public main with exact resolved SHAs retained in receipts; Atlantis development branches are not adopted.

## Build and preview

```console
npm ci
npm start
npm run typecheck
npm run check:domain-hardcode
npm run build
npm run check:seo
npm run receipt:build
```

Build generates Japanese and English. Prebuild checks document pairs and source pins. Production deployment remains unimplemented and tracked in existing issue #2; Sakura and DNS values are not inferred.

## License

Documentation: CC BY 4.0. Code, workflows, and validators: Apache-2.0. Preserve individual credits and third-party terms. Root LICENSE alone does not relicense prose; see LICENSE-POLICY.ja.md. This reference manuscript does not replace the Japanese original or constitute an equivalent execution Kernel.

The CI toolchain is pinned to Node.js 20.20.2 / npm 10.8.2. See `.nvmrc` and `packageManager`. Build artifacts include the receipt under `.well-known`.
