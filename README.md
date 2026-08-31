# SphereOS documentation site

状態: `BOOTSTRAP / NO DOCUSAURUS / NOT DEPLOYED / CONTENT NOT MIGRATED`

SphereOS Atlantis、ASTRO、IBD／IFD、Instance Ghost、MAGI、World Builder等を、利用者から見た統合SDK documentationとして公開するためのsite repositoryです。

Target URL: `https://sphere.i-s.dev/`

## 責務境界

- SphereOS固有の上流契約とMAGI実装正本: [`saitoomituru/SphereOS-Atlantis`](https://github.com/saitoomituru/SphereOS-Atlantis)
- ASTRO実装正本: [`saitoomituru/SphereASTRO`](https://github.com/saitoomituru/SphereASTRO)
- IBD実装正本: [`saitoomituru/IBD`](https://github.com/saitoomituru/IBD)
- FAM一般論と横断規約正本: [`saitoomituru/ZeroRoomLab-manifest`](https://github.com/saitoomituru/ZeroRoomLab-manifest)
- 本repository: 上記を吸収しないdocs projection

ASTROはstandalone componentです。本siteへ掲載することは、Atlantis bundleを必須化したり、実装ownershipを移したりすることを意味しません。

## 現在地

- repository／governance scaffold: 設置済み
- MAGI採用channel: `main`
- Docusaurus: 未実装（[`Q Atlantis #22`](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/22)）
- Sakura deploy: 未実装（[`Q Atlantis #23`](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/23)）
- content migration: 未着手（[`Q Atlantis #26`](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/26)）
- `sphere.i-s.dev`既存site退避: User作業待ち

## directory

- `docs/start/`: 公開入口
- `docs/engineering/`: site固有の統合説明
- `docs/operations/`: 運用、検証、provenance
- `docs/legacy/`: Q3互換projection。旧原典の正本棚ではない
- `reference/sphere/`: Sphere系reference projection
- `glossary/sphere/`: Sphere系用語projection
- `governance/`: MAGI採用と責務契約
- `migration/`: Q Atlantisからの移植台帳・receipt
- `sources/`: source pointer。正本全文を無条件複製しない

## license

code、workflow、validatorはApache-2.0、一般文書・図・FlavorはCC BY 4.0を既定候補とし、個別表示と第三者licenseを優先します。詳細は[`LICENSE-POLICY.ja.md`](LICENSE-POLICY.ja.md)を参照してください。
