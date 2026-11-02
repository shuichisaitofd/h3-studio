# H3 Studio

Mobile UI for MiniMax H3 on RunPod (design refresh of the Veda test site).

- Page: https://shuichisaitofd.github.io/h3-studio/
- App code (loaded through `<base href>`): https://github.com/shuichisaitofd/runpod-h3-mobile
- `studio.css` is a design-only layer. `veda-panel.js` (Veda), `veda-eros.js` (10Eros) and `veda-lora-extra.js` (extra LoRAs) are copied from the Veda test site.

## デザイン（2026-11-02〜）
- 黒ベースのデザイン（next.css）と、10Eros/Veda ボタンの設定ページへの移動・LoRA一覧の2カラム＆長押しドラッグ並べ替え（next.js）。テスト版 h3-studio-next から反映。
- 前の紫のデザイン（studio.css）はファイルを残してある。戻すときは index.html の next.css / next.js の行を studio.css?v=3 の1行に戻す。
