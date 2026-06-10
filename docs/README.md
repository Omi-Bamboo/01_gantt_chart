# Workflow Gantt Visualization Project

## 1. 概要
このプロジェクトは，学習用に作成したワークフロー可視化システムです。

目的は，ワークフローを構成するアクティビティと依存関係をモデル化して，
ガントチャートによる可視化とアルゴリズムによる解析を行うことです。

学習項目：
- ガントチャート表示
- 外部データ取り込み
- ワークフローのモデリング
- ワークフロー間の依存関係
- ドキュメント作成
- プロジェクト管理

## 2. 使用技術
1. フロントエンド
   - TypeScript
   - Vite
   - frappe-gantt
2. データモデル
   - Workflow
   - Activity
   - Assignment
   - Task Dependency
3. データベース
   - SQLite
   - SQL View
4. アルゴリズム
   - Topological Sort
   - Circular Dependency Detection
   - Progress Calculation
5. プロジェクト管理
   - GitHub Issues
   - GitHub Milestones
   - plantUML
## 3. 特徴
- ガントチャートにタスクを表示
- 複数タスクの期間と進捗を表示
- タスク間の依存関係表示
- ワークフローデータを外部から取り込み
- ワークフロー解析結果を可視化

## 4. 開発計画
### Miiestone 1: ガントチャート作成   
1. 環境設定
2. ガントチャート表示
3. 複数タスク追加
4. タスク依存性の追加
### Milestone 2: データモデル構築
1. テーブル作成
2. JSON出力
3. ガントチャートから取り込み
### Milestone 3: ワークフロー制御
1. タスクのソート
2. 依存性の循環
3. 進捗度の計算

## 5. ファイル構造
```
.
├── index.html
├── package.json
├── src
│   ├── index.ts
│   ├── index.css
│   └── vite-env.d.ts
└── docs
    └── README.md
```
## 6. 開発環境
- Node.js
- TypeScript
- frappe-gantt OSS

## 7. 実行
1. インストール
```
npm install
```
2. 開始
```
npm run dev
```
3. 開く
```
http://localhost:5173/
```

## 8. 設計
Workflow / Activity / Dependency<br>
    ↓<br>
SQLite<br>
    ↓<br>
Backend API<br>
    ↓<br>
TypeScript<br>
    ↓<br>
frappe-gantt<br>
    ↓<br>
HTML/CSS