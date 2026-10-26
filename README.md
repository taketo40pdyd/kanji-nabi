# 漢字ナビ

小学1・2年の漢字を、読み・意味・部首・画数・熟語から探せる無料の漢字検索アプリです。音声・カメラ検索、書き順アニメーション、PWA（ホーム画面に追加）に対応しています。

## 公開手順（GitHub Pages）

1. GitHubで新しいリポジトリを作り、このフォルダの中身をすべてアップロードします（`.nojekyll` も含めてください）。
2. 次のコマンドで、`OWNER` と `REPO` を自分のものに置き換えます（Mac/Linux）。
   ```
   sed -i '' 's/OWNER/あなたのユーザー名/g; s/REPO/リポジトリ名/g' index.html robots.txt sitemap.xml
   ```
   Windowsなどは、3つのファイルをエディタで開き、`OWNER` と `REPO` を一括置換してください。
3. リポジトリの **Settings → Pages** を開き、Source を **Deploy from a branch**、Branch を **main / (root)** にして保存します。
4. 数分後、`https://ユーザー名.github.io/リポジトリ名/` で公開されます。

## 更新するとき

- `index.html` の `APP_VERSION` の数字を大きくし、`sw.js` の `kanjinavi-v1` も `v2` のように上げてからアップロードしてください。
- アプリ内の「設定 → 更新を確認」で、利用者に新しい版が通知されます。

## ファイル

| ファイル | 役割 |
|---|---|
| index.html | アプリ本体（1ファイル完結） |
| sw.js | オフライン用のサービスワーカー |
| icon-192.png / icon-512.png / apple-touch-icon.png | アイコン |
| robots.txt / sitemap.xml | 検索エンジン向け |
| 404.html | ページが見つからないとき |
| .nojekyll | GitHub PagesのJekyll処理を無効にする |

## 書き順データ

アプリ内の書き順は一部の漢字のみです。全字を表示するには、設定の「KanjiVGを読み込む」から [KanjiVG](https://kanjivg.tagaini.net/) のファイルを読み込んでください。KanjiVGはCC BY-SA 3.0のため、再配布する場合は表記が必要です。
