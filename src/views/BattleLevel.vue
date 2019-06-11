<template>
  <div class="my-custom-scrollbar">
    <b-table dark striped hover :items="this.datas" :fields="fields"></b-table>

    <!-- <pie-chart v-bind:cData="{labels:[10,20],datasets:[{data:[11,22]}]}" class="chart"/> -->
  </div>
</template>

<script>
import firebase from "@/firebase/firestore";
import axios from "axios";
// import PieChart from "@/components/PieChart";
export default {
  name: "BattleLevel",

  data: function() {
    return {
      fields: [
        { key: "Name", sortable: true },

        { key: "MRD", label: "斧術士 / 戦士", sortable: true },
        { key: "GLA", label: "剣術士 / ナイト", sortable: true },
        { key: "DRK", label: "暗黒騎士", sortable: true },

        { key: "CNJ", label: "幻術士 / 白魔道士", sortable: true },
        { key: "SMN", label: "巴術士 / 召喚士", sortable: true },
        { key: "SCH", label: "巴術士 / 学者", sortable: true },
        { key: "AST", label: "占星術師", sortable: true },

        { key: "PGL", label: "格闘士 / モンク", sortable: true },
        { key: "LNC", label: "槍術師 / 竜騎士", sortable: true },
        { key: "ROG", label: "双剣士 / 忍者", sortable: true },
        { key: "SAM", label: "侍", sortable: true },
        { key: "ARC", label: "弓術師 / 吟遊詩人", sortable: true },
        { key: "THM", label: "呪術師 / 黒魔道士", sortable: true },
        { key: "MCH", label: "機工師", sortable: true },

        { key: "RDM", label: "赤魔道士", sortable: true },
        { key: "BLU", label: "青魔道士", sortable: true }
      ],
      datas: [
        {
          Name: "",

          MRD: "",
          GLA: "",
          DRK: "",
          CNJ: "",
          SMN: "",
          SCH: "",
          AST: "",
          PGL: "",
          ARM: "",
          GSM: "",
          LNC: "",
          ROG: "",

          SAM: "",
          ARC: "",
          THM: "",
          MCH: "",

          BLU: ""
        }
      ]
    };
  },
  mounted() {
    this.setcharadata();
  },
  computed: {
    countRace: function() {
      var arr = [];
      arr = this.datas;
    }
  },
  methods: {
    setcharadata: function() {
      console.log("setcharadata");

      var docRef = firebase
        .firestore()
        .collection("fffc")
        .doc("fcmemberlist");

      var self = this;

      docRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            var items = doc.data();
            console.log(items);
            var i = 0;
            var arr = [];

            items.FreeCompanyMembers.forEach(item => {
              console.log(item.ID);

              var id = item.ID;

              var idRef = firebase
                .firestore()
                .collection("fffc")
                .doc(String(id));

              idRef
                .get()
                .then(function(doc) {
                  if (doc.exists) {
                    var cdata = doc.data();
                    console.log(doc.data());
                    var tempgen;
                    if (cdata.Character.Gender == 1) {
                      tempgen = "男性";
                    } else {
                      tempgen = "女性";
                    }

                    arr.splice(i, 1, {
                      Name: cdata.Character.Name,
                      Gender: tempgen,
                      Race: cdata.Character.Race.Name,
                      Tribe: cdata.Character.Tribe.Name,
                      Nameday: cdata.Character.Nameday,
                      Town: cdata.Character.Town.Name,
                      GrandCompany: cdata.Character.GrandCompany.Company.Name,
                      CompanyRank: cdata.Character.GrandCompany.Rank.Name,

                      GLA: cdata.Character.ClassJobs["1_19"].Level,
                      SMN: cdata.Character.ClassJobs["26_27"].Level,
                      SCH: cdata.Character.ClassJobs["26_28"].Level,

                      ROG: cdata.Character.ClassJobs["29_30"].Level,
                      PGL: cdata.Character.ClassJobs["2_20"].Level,
                      MCH: cdata.Character.ClassJobs["31_31"].Level,
                      DRK: cdata.Character.ClassJobs["32_32"].Level,
                      AST: cdata.Character.ClassJobs["33_33"].Level,
                      SAM: cdata.Character.ClassJobs["34_34"].Level,
                      RDM: cdata.Character.ClassJobs["35_35"].Level,
                      BLU: cdata.Character.ClassJobs["36_36"].Level,
                      MRD: cdata.Character.ClassJobs["3_21"].Level,
                      LNC: cdata.Character.ClassJobs["4_22"].Level,
                      ARC: cdata.Character.ClassJobs["5_23"].Level,
                      CNJ: cdata.Character.ClassJobs["6_24"].Level,
                      THM: cdata.Character.ClassJobs["7_25"].Level
                    });

                    //.log(cdata.Character.ClassJobs["10_10"].Level);

                    i = i + 1;
                  } else {
                    console.log("No such document!");
                    return null;
                  }
                })
                .catch(function(error) {
                  console.log("Error getting document:", error);
                  return null;
                });
            });

            self.datas = arr;
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  }
};
</script>

<style>
</style>

