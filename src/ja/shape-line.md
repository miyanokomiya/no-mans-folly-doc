# ライン

## ラインタイプ
### ポリライン
ポリラインの各セグメントは線分、円弧、ベジェのいずれかに変形可能です。
![](/assets/shape-line-polyline.png)

#### 円弧
頂点間中心付近のアンカーをドラッグすることで円弧に変形します。
![](/assets/shape-line-arc.png)

#### ベジェ曲線
頂点周辺のアンカーをドラッグすることでベジェ曲線に変形します。セグメントがすでに円弧状になっている場合、このアンカーは表示されません。
![](/assets/shape-line-bezier.png)

### スムーズカーブ
ライン全体がスムーズなベジェ曲線に自動的に変形します。
![](/assets/shape-line-smooth.png)

ラインの始点と終点が同じ位置にある場合はループを成します。
![](/assets/shape-line-smooth-loop.png)

### エルボー / カーブエルボー
エルボーラインは接続されたシェイプに応じて自動的に最適化されます。シェイプに接続されていない場合、この最適化は不定な結果となります。
![](/assets/shape-line-elbow.png)

![](/assets/shape-line-elbow-curved.png)

内部セグメントはドラッグすることで特定の方向に移動することが可能です。
![](/assets/shape-line-elbow-move.png)

## 接線 / 法線
シェイプのアウトラインやラインに対して接線 / 法線を作成することが可能です。  
ツールバーからそれぞれのボタンのクリック後、キャンバスにて対象のラインを選択します。

![](/assets/shape-line-tangent.png)

![](/assets/shape-line-normal.png)

## 頂点編集
エルボー以外のラインでは頂点の追加と削除が可能です。

### 追加
頂点付近のアンカーをドラッグすることで新たな頂点を追加して移動します。
![](/assets/shape-line-vertices.png)

### 削除
頂点上のコンテキストメニューから削除が可能です。
![](/assets/shape-line-delete-vertex-context.png)

shift + クリックで頂点を削除することも可能です。

## セグメント編集
各セグメントをドラッグすることで、そのセグメントの移動、または押し出しが可能です。  
セグメントの移動、または押し出し中に`e`キーを押下することで、操作を互いに切り替えることが可能です。
![](/assets/shape-line-segment-move.png)

セグメントが押し出された場合、新たな頂点が自動的に挿入されます。
![](/assets/shape-line-segment-extrude.png)

## ジャンプ
ラインのこのプロパティがオンの場合、そのラインは背後にある他のラインをジャンプします。ジャンプは線分同士の場合のみ発生します。
![](/assets/shape-line-jump.png)

## ポリゴン化
エルボー以外のラインは、そのラインをアウトラインとするポリライン、またはポリゴンに変換することが可能です。

ライン
![](/assets/shape-makepolygon-line.png)

ポリライン
![](/assets/shape-makepolygon-polyline.png)

ポリゴン
![](/assets/shape-makepolygon-polygon.png)

ポリラインとポリゴンは再びラインに戻すことが可能ですが、一部のプロパティ(シェイプとの接続、ラインヘッドなど)はこの変換によって失われます。
