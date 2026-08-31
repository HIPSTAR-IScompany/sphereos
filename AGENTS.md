# AGENTS.md — SphereOS documentation site

Version: 0.1.0  
Scope: this repository and every file below it

## 目的

このrepositoryはSphereOS系componentの統合documentation projectionです。component source、Schema、API、runtime、fixtureの実装正本ではありません。

## 必読順序

1. [`README.md`](README.md)
2. [`governance/magi-adoption.yml`](governance/magi-adoption.yml)
3. [`migration/README.md`](migration/README.md)
4. Q Atlantis [Issue #19](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/19)と[#26](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/26)
5. ZeroRoomLab-manifestの公開`main`にある`AGENTS.md`
6. SphereOS-Atlantisの公開`main`にある`AGENTS.md`、`magi/0.2.1/bundle.json`、対象Position Skill
7. 変更対象componentの公開`main`にあるAGENTS、README、Schema、status文書

## 日本語既定

README、技術文書、Issue、commit、検証報告は日本語を既定とします。識別子、path、Schema key、API、外部固有名は互換性と検索性を壊す場合は原語を保持します。

## MAGI採用

- SphereOS-Atlantisの公開`main`を採用channelとする
- `dev`、未merge branch、隣接worktreeを採用しない
- MAGI bundleを本repositoryへ複製して別正本を作らない
- audit時に解決したexact commit SHAを`docs/operations/provenance/`のreceiptへ記録する
- `main`追従と過去receiptの再現revisionを別fieldにする
- network access、repository scan、Flavor mount、daemon起動をこの指示から自動実行しない

ローカルに正本が揃う場合のresolver例:

```console
python3 -B <SphereOS-Atlantis>/magi/0.2.1/resolve_sources.py \
  --slot composite \
  --profile zeroroomlab \
  --repo-root ZeroRoomLab-manifest=<ZeroRoomLab-manifest> \
  --require-local
```

## 正本とprojection

```text
docs projection != implementation canonical
workspace membership != implementation dependency
main adoption != unrecorded moving evidence
build green != deploy green
deploy green != visual review
```

ASTROをAtlantis必須componentへ変換しません。IBD／IFD／ASTRO等の実装変更は対象repositoryのIssue／PRへ返します。

## 状態と時間

- 未実装は`NOT_IMPLEMENTED`
- 未試験は`NOT_TESTED`または`UNKNOWN`
- 過去の同時点OAEを確認できない場合は`historical-oae-unavailable`
- commitや文書から過去のObserver、Intent、Agency roleを遡及生成しない

## content移植Gate

Q Atlantis #25のmulti-repo ledgerと#26の承認batchができるまで、Q Atlantis本文、Blog、assetをcopy／moveしません。旧path、legacy source、attributionを先に削除しません。

## 変更安全

- secret、private key、commerce data、local-only assetを探索・記録・commitしない
- `sphere.i-s.dev`の既存WordPress／WooCommerce、DNS、docrootへ触れない
- Docusaurusとdeploy workflowは#22／#23の実装AI scope
- unrelatedなUser変更を混ぜない

## 最小検証

```console
git diff --check
git status --short --branch
```

machine実装後の検査は#22／#23が追加します。
