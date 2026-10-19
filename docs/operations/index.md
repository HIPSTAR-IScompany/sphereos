---
canonical_language: ja-JP
publication_batch: 2026-10-19
translation_status: canonical-editorial-projection
---

# Sphere-DOSで参加する

Sphere-DOSにはworkspace展開、.vendor submodule、PLI Context Alias、Fork-on-Live／Dev Containerの四Surfaceがあります。必要な足場を選び、Manifestと利用側repositoryの規約を入口にします。

Prompt Line Interfaceは意図・文脈・拘束を渡す面、Command Line Interfaceはcommandとargumentで操作する面です。前者を偽CLIとせず、後者を読解の上位互換ともしません。

GitHub connector、Python process、Codespaces、model provider等はExecution Envelopeとして別に確認します。文書を読むことと、CLI・MAGI resolver・testの実行は異なります。

1. Manifest、対象repository、採用mainのrevisionを解決する。
2. 最寄りのAGENTSと仕様を読む。
3. 目的、source、権限、出力、停止条件を渡す。
4. 解決可能な差分を記録して修復し、意味・権限・来歴が未確定の衝突は既存Issueへ返す。
5. 実行した検査と未実行を分け、main反映と復旧経路を残す。

bootstrapコマンドとNative SurfaceはSphere-DOS原典を参照します。英語版は解説であり、同一Kernelとして実行する翻訳ではありません。

[English reference manuscript](https://github.com/HIPSTAR-IScompany/sphereos/blob/main/i18n/en/docusaurus-plugin-content-docs/current/operations/index.md)。日本語を正本とする編集解説です。原典の契約を変更しません。

著者: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ。原典の個別creditは各出典を参照。文書: CC BY 4.0。

## 出典

- [SPHERE-DOS.ja.md](https://github.com/saitoomituru/SphereOS-Atlantis/blob/bd8c7a807d5f016eb244c9ffbf39a62cee5e2d65/SPHERE-DOS.ja.md)
- [help/interfaces.json](https://github.com/saitoomituru/SphereOS-Atlantis/blob/bd8c7a807d5f016eb244c9ffbf39a62cee5e2d65/help/interfaces.json)
