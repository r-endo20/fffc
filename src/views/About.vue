<template>
  <div class="about">
    <h5>これなに？</h5>
    <ul>
      <li>FF14のフリーカンパニー「nocturne」の非公式ポータルサイト(？)です。</li>
      <li>ポータルサイトといってもまだ何もないね。</li>
      <li>Rico Cheslockが遊びと勉強を兼ねて作っています。</li>
    </ul>

    <h5>使ってる(よくわかんない)技術</h5>
    <ul>
      <li>Vue.js</li>
      <li>Firebase</li>
      <li>
        <a href="https://xivapi.com/">XIV API</a>
        <br>
      </li>
    </ul>
    <h5>そのほか</h5>
    <ul>
      <li>要望などがあればモグレターとかロードストーンとかで伝えてもらえると。</li>
      <li>ただ開発は気まぐれなので期待しないでください。</li>
      <li>Web開発有識者の方からアドバイスとかあればそれももらえると勉強になります。</li>
      <li>
        <b-badge pill variant="danger">重要</b-badge>まだ仮版なので不特定多数への公開は待ってもらえると。
      </li>
      <li>ちょろっと友達に見せるとかスクショとかでSNSにあげるとかはOKです。</li>
    </ul>
  </div>
</template>
<script>
//import db from "./components/firebaseInit";

export default {
  name: "about"
};
</script>
<style>
.about {
  text-align: left;
  margin: 20px;
}
</style>
>