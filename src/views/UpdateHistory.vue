<template>
  <div class="about">
    <h5>更新履歴</h5>
    <h6>
      <b-badge pill variant="info">v0.2.1</b-badge>2019/06/07
    </h6>
    <ul>
      <li>ページわけた。</li>
      <li>ロードストーンの個別リンクを貼りたい気持ち。</li>
      <li>みんなの誕生日をカレンダー形式で表示できないかな。お祝いできそう。</li>
      <li>ああああああBootstrapのテーブルをカスタムできねえええええ。</li>
      <li>データの自動的更新を最優先で実装する。</li>
    </ul>

    <h6>
      <b-badge pill variant="info">v0.2</b-badge>2019/06/07
    </h6>
    <ul>
      <li>レベルがみれる！</li>
      <li>ぶっちゃけページ分けたほうが見やすい。とりあえず仮で。</li>
      <li>グラフとかで表にしたい。</li>
      <li>レイアウトがガバついてるのでなんとかする。</li>
      <li>データ手動更新の仕組みがバカみたいなので自動で取ってくるようにする。</li>
    </ul>
    <h6>
      <b-badge pill variant="info">v0.1</b-badge>2019/06/06
    </h6>
    <ul>
      <li>試験的に仮公開。</li>
      <li>とりあえずメンバーのデータを一覧で見たかった。</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "updatehistory"
};
</script>
<style>
.about {
  text-align: left;
  margin: 20px;
}
</style>
>