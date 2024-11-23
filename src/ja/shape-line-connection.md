# ラインコネクション

## 接続
ラインの各頂点は、他シェイプのアウトライン、あるいは中心付近へ移動することで接続することが可能です。

![](/assets/shape-line-connection.png)

## 切断
頂点を移動せずに切断するには、その頂点を対象とするコンテキストメニューから頂点切断を選択、あるいはそのラインを対象とするインスペクターパネルにて切断ボタンをクリックします。

![](/assets/shape-line-connection-detach1.png)

![](/assets/shape-line-connection-detach2.png)

## スマートコネクション
ラインの始点か終点がシェイプの中心に接続されている場合、その頂点付近に黄色のアンカーが表示されます。このアンカーをクリックすると、その頂点はアウトラインに移動しつつ、引き続きシェイプの中心に接続されているかのように動作します。

![](/assets/shape-line-connection-center-1.png)

![](/assets/shape-line-connection-center-2.png)

## リモートコネクション
頂点を動かさずに他シェイプに接続することが可能です。

その頂点を対象とするコンテキストメニューから頂点接続を選択します。

![](/assets/shape-line-connection-attach-menu1.png)

接続するシェイプを選択します。

![](/assets/shape-line-connection-attach-menu2.png)

頂点がシェイプに遠隔で接続されます。

![](/assets/shape-line-connection-attach-menu3.png)

この機能は、ライン全体をシェイプと一緒に動かしたいケースなどで有用です。

<video controls="controls" muted src="/assets/shape-line-connection-attach-menu-example.mp4" />
