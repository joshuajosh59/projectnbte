<template>
  <div id="institution">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Rank Institution</b>
      </div>
    </b-row>
    <br />
    <b-row>
      <b-col md="6"></b-col>
      <b-col md="6">
        <div style="display: flex">
          <div style="flex-grow: 1; width: 350px; margin-left: 40px">
            <input placeholder="Search" class="form-control mx-auto" type="text" />
          </div>
          <div style="flex-grow: 1; width: 350px; margin-top: 10px">
            <b-btn class="buttons" style="padding: 8px 40px">Search</b-btn>
          </div>
        </div>
      </b-col>
    </b-row>
    <div style="margin-top: 20px; color: #333333; font-size: 15px; font-family: montserrat">
      <b-form class="addNewInstitution" @submit.prevent="rankInstitution">
        <b-row>
          <b-col md="6" v-for="(c,i) in criteria" :key="c.id">
            <b>{{i+1}}.</b>
            <b-form-group :label="c.name">
              <b-form-input v-model="c.score" type="number" :min="0" :max="5" required />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-btn class="newButton" type="submit">Rank</b-btn>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
import { getHeader, url } from "@/config.js";

export default {
  data() {
    return {
      id: this.$route.params.Id,
      criterias: [],
      criteria: []
    };
  },
  methods: {
    rankInstitution() {
      const { criteria } = this;
      let newobj = criteria.map(item => {
        return { criterion_id: item.criterion_id, score: item.score };
      });
      let object = {
        criteria: newobj
      };
      this.$http
        .post(url + `institution/${this.id}/criteria`, object, {
          headers: getHeader()
        })
        .then(response => {
          if (response.data.success) {
            this.$swal({
              type: "success",
              title: "Sucess",
              text: "Institution ranked successfully",
              timer: 3000
            });
            this.$router.push("/admin/rank");
          }
        });
    },
    getCriteria() {
      this.$http.get(url + `criteria`).then(response => {
        this.criterias = response.data.data;
        let c = response.data.data;
        for (let i = 0; i < c.length; i++) {
          this.criteria.push({
            criterion_id: c[i].id,
            score: c[i].weigth,
            name: c[i].name
          });
        }
      });
    }
  },
  created() {
    this.getCriteria();
  }
};
</script>

<style scoped>
.addNewInstitution input,
select {
  height: 60px;
  margin-bottom: 40px;
}
.addNewInstitution .seperator {
  margin: 2rem 0px 2rem 0px;
  color: #000000;
  font-weight: 900;
  font-size: 25px;
}
#institution {
  width: 100%;
  background: #f6f5fd;
  padding: 20px;
}
.dropdown a {
  display: block;
  padding: 0.2em 0.8em;
  text-decoration: none;
  background: #ffffff;
  color: #333333;
}
th {
  white-space: nowrap;
}
.dropdown a:hover {
  background: #56f063;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown .dropdown-menu {
  position: absolute;
  top: 100%;
  display: none;
  margin: 0;
  list-style: none;
  width: 100%;
  padding: 0;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

/** Button Styles **/
.dropdown button {
  background: #ff6223;
  color: #ffffff;
  border: none;
  margin: 0;
  padding: 0.4em 0.8em;
  font-size: 1em;
}
.open-sans {
  font-family: "Open Sans", sans-serif;
  color: #262626;
}
tr:nth-child(even) {
  background: rgba(3, 145, 62, 0.144);
  border-left: 1px solid #03913f;
}
.montserrat {
  font-family: Montserrat, sans-serif;
  color: #333333;
}
.top-display {
  display: flex;
  margin-top: 20px;
}
.buttons {
  margin-left: 10px;
  margin-top: -5px;
  border-radius: 38px;
  background: #03913f;
}
.newButton {
  margin-left: 10px;
  width: calc((100% / 2) - 20px);
  height: 47px;
  margin: 10px;
  border-radius: 38px;
  background: #03913f;
  font-weight: 900;
}
.newButton2 {
  margin-left: 10px;
  width: calc((100% / 2) - 20px);
  height: 47px;
  margin: 10px;
  border-radius: 38px;
  background: #888888;
  font-weight: 900;
}
.table {
  background: white;
}
.buttons:hover,
.newButton:hover,
.newButton2:hover {
  background: #fff;
  color: #03913f;
}
.top-display-items {
  margin-left: 20px;
  font-size: 15px;
  padding: 0 20px 0 0;
  max-height: 22px;
}
.border-line {
  border-right: 2px solid #333333;
}
.green {
  color: #03913f;
}
</style>
