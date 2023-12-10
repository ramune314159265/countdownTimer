# カウントダウンタイマー

## 概要

インスタのカウントダウン風のタイマー(OBS用)

デモ: <https://ramune314159265.github.io/countdownTimer/?title=タイトル&unixtime=1704034800>

## 使い方

1. クローンする
2. index.html にアクセス
3. パラメータの`title`にカウントダウンタイトル、`unixtime`にunixTimeを入れる
`例:index.html?title=カウントダウン中&unixtime=1704034800`

## 注意点

- 残り時間は2桁までしか表示できないので残り時間が100時間以上だと正常に表示できません
- カウントダウンの時間が過ぎたあとの処理とかがありません
