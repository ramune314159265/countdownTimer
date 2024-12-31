# カウントダウンタイマー

## 概要

インスタのカウントダウン風のタイマー(OBS用)

デモ: <https://ramune314159265.github.io/countdownTimer/?titlebefore=カウントダウン中&titlethen=経過&titleafter=カウントダウン終了済み&unixtime=1767193200>

## 使い方

1. クローンする
2. index.html にアクセス
3. パラメータに適切な値を入力する
`例:index.html?titlebefore=カウントダウン中&titlethen=経過！&titleafter=カウントダウン終了済み&unixtime=1735657200`

## パラメーター

- `titlebefore` …カウントダウン経過前のタイトル
- `titlethen` …カウントダウンが0秒のときのタイトル
- `titlebefore` …カウントダウン経過後のタイトル
- `unixtime` …カウントダウンの時間(unix時間)
- `offset` …ずらす秒数(任意)

## 注意点

- 残り時間は2桁までしか表示できないので残り時間が100時間以上だと正常に表示できません
- ~~カウントダウンの時間が過ぎたあとの処理とかがありません~~ (修正済み)
