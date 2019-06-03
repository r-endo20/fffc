<template>
  <div>
    <b-table striped hover :items="this.FreeCompanyMembers" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Mainpage",
  data: function() {
    return {
      fields: [
        { key: "ID", sortable: true },
        { key: "Name", sortable: true },
        { key: "Rank", sortable: true }
      ],
      FreeCompanyMembers: [
        {
          Avatar: "",
          FeastMatch: "",
          ID: "",
          Name: "",
          Rank: "",
          RankIcon: "",
          Server: ""
        }
      ]
    };
  },
  mounted() {
    axios
      .get("https://xivapi.com/freecompany/9229423748854162940?data=FCM")
      .then(response => {
        this.FreeCompanyMembers = response.data.FreeCompanyMembers;
        console.log(this.FreeCompanyMembers);
      });
  },
  methods: {}
};
</script>

