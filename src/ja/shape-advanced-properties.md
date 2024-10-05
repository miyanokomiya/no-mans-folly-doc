# 高度な属性値

## アルファ
シェイプの透明度をアルファ属性値で変更します。`1`のときはシェイプは不透明に、`0`のときはシェイプが完全に透明になります。  
この属性値はインスペクターパネルから設定します。
![Screenshot for alpha](/assets/shape-property-alpha.png)

## グループ内制約
グループ内の子シェイプの挙動を設定します。  
これらの属性値はインスペクターパネルから設定します。

### 設定例
右上の子シェイプにこのような設定を行った場合、
![Screenshot for group constraints](/assets/shape-property-group-con-tr.png)

グループがリサイズされたときの結果はこのようになります。
![Screenshot for group constraints](/assets/shape-property-group-con-tr-resized.png)

シェイプがグループに属していない場合、この属性値は機能しません。

## クリップ
グループシェイプ内でのクリップアウト/インを設定します。  
これらの属性値はインスペクターパネルから設定します。

### グループのクリップモード
範囲内の表示をくり抜くか、範囲外の表示をくり抜くかを`クリップモード`で設定します。
![Screenshot for clip mode](/assets/shape-property-clip-mode.png)

範囲内の表示をくり抜く場合:
![Screenshot for clip mode out](/assets/shape-property-clip-mode-out.png)

範囲外の表示をくり抜く場合:
![Screenshot for clip mode in](/assets/shape-property-clip-mode-in.png)

### 子シェイプをクリップ範囲に変換
`親グループをクリップ`をオンにすると、シェイプがクリップ範囲に変換されます。
![Screenshot for clip within parent group](/assets/shape-property-clip-on.png)

グループシェイプのこの属性値がオンになった場合、内部の全てのシェイプが常にクリップ範囲に変換されます。  
シェイプがグループに属していない場合、この属性値は機能しません。

### クリップ範囲のアウトラインを取り除く
`アウトラインを取り除く`をオンにすると、クリップ領域のはみ出したアウトラインが非表示になります。
![Screenshot for crop outline](/assets/shape-property-clip-crop-outline.png)
