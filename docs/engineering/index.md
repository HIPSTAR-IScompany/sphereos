---
canonical_language: ja-JP
publication_batch: 2026-10-19
translation_status: canonical-editorial-projection
---

# アーキテクチャと現在地

SphereOS Atlantisは、World・意味・権限・資源・隔離・復旧を扱うOSアーキテクチャの系譜です。設計、開発足場、component実装、standalone runtimeを分けて読みます。

| 対象 | 責務 |
|---|---|
| Manifest | 一般規約・FAM一般論・研究原典 |
| Atlantis | Sphere固有の上流契約、PLI／CLI、MAGI、Sphere-DOS |
| ASTRO／IBD／AAE等 | 各componentのSchema・runtime・fixture |
| 本site | 利用者向けの統合説明 |

## 足場と本体

採用したManifestは、Architect／Bootstrap開発足場とPrompt Engineering Editionを、standalone runner／本体runtimeから区別しています。「ランナーなし」と一括する説明は、CLIや機械拘束Harnessの存在を落とします。逆に、CLIがあることを汎用OS runtimeの完成へ昇格しません。

資金・電力・演算資源待ちは、設計の失敗や全系譜の凍結ではありません。対象component・revision・試験を添えて、実装済み、未試験、未実装、資源待ちを別々に更新します。研究の意味をruntimeの有無だけで裁定せず、runtimeの状態を物語で上書きしないことが基本です。

[English reference manuscript](https://github.com/HIPSTAR-IScompany/sphereos/blob/main/i18n/en/docusaurus-plugin-content-docs/current/engineering/index.md)。日本語を正本とする編集解説です。原典の契約を変更しません。

著者: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ。原典の個別creditは各出典を参照。文書: CC BY 4.0。

## 出典

- [docs/theory/sphereos-atlantis-versioning-and-bootstrap.ja.md](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/139cc619fcdd62f254074e655ad3fb04e190322d/docs/theory/sphereos-atlantis-versioning-and-bootstrap.ja.md)
- [SPHERE-DOS.ja.md](https://github.com/saitoomituru/SphereOS-Atlantis/blob/bd8c7a807d5f016eb244c9ffbf39a62cee5e2d65/SPHERE-DOS.ja.md)
