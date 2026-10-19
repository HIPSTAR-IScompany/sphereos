# SphereOS

World管理・SDK・Sphere-DOSを、日本語正本とen-US解説で読む文書サイトです。[English](README.en-US.md)。

## 読み始める

[日本語の入口](docs/start/index.md)／[en-USの入口](i18n/en/docusaurus-plugin-content-docs/current/start/index.md)。著者: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ。公開主体: HIPSTAR-IScompany。

2026-10-19の初回文書batchを反映。状態はPARTIAL_PROJECTIONで、旧本文・assetの全量移植は未完了です。Git／build／Sakura公開／DOI発行を分けて記録します。公開対象URLはCIのPUBLICATION_URLで設定します。

## 正本と来歴

[Manifest](https://github.com/saitoomituru/ZeroRoomLab-manifest)を横断規約・研究原典、[SphereOS-Atlantis](https://github.com/saitoomituru/SphereOS-Atlantis)と各componentを実装正本として保持します。Fold NICの確認済み実装正本は[saitoomituru/fold-nic](https://github.com/saitoomituru/fold-nic)。

[source map](sources/publication-batch-2026-10-19.json)／[日本語・翻訳方針](docs/operations/publication-policy.md)／[移植状態](migration/README.md)。MAGI採用channelはmain、receiptには解決したexact SHAを記録します。Atlantisのfeature／dev branchは採用していません。

## buildとpreview

```console
npm ci
npm start
npm run typecheck
npm run check:domain-hardcode
npm run build
npm run check:seo
npm run receipt:build
```

buildは日本語とen-USを生成します。prebuildで日英pair・出典を検査します。production deployは未実装のまま既存Issue #2で追跡し、Sakura設定やDNS値を推測しません。

## license

文書はCC BY 4.0、code／workflow／validatorはApache-2.0。個別credit・第三者licenseは優先します。root LICENSEのみを根拠に文章を再licenseしません。詳細は[LICENSE-POLICY.ja.md](LICENSE-POLICY.ja.md)。

CIの固定toolchainはNode.js 20.20.2 / npm 10.8.2です。`.nvmrc`と`packageManager`を照合し、build artifactには`.well-known`のreceiptも含めます。
