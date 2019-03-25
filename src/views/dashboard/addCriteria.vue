<template>
  <div id="institution">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Add Criteria</b>
      </div>
    </b-row>
    <br>
    <div style="margin-top: 20px;color: #333333; font-size: 15px; font-family: montserrat">
      <b-form @submit.prevent="addCriteria">
        <b-form-group label="Name" label-for="name" label-align="center">
          <b-form-input
            id="name"
            type="text"
            v-model="name"
            required
            placeholder="Enter Criteria Name"
          />
        </b-form-group>
        <b-form-group label="Weight" label-for="weight" label-align="center">
          <b-form-input
            id="weight"
            type="number"
            v-model="weight"
            required
            placeholder="Enter Criteria Weight"
          />
        </b-form-group>
        <b-row>
          <b-col md="4"></b-col>
          <b-col md="4">
            <b-btn class="newButton" type="submit">Add</b-btn>
          </b-col>
          <b-col md="4"></b-col>
        </b-row>
      </b-form>
    </div>
    <!-- </b-col>
    </b-row>-->
  </div>
</template>

<script>
import { getHeader, url } from '@/config.js';

export default {
  data() {
    return {
      name: '',
      weight: '',
    }
  },
  methods: {
    addCriteria() {
      const { name, weight } = this;
      this.$http.post(url + 'criteria', { name, 'weight': weight }, { headers: getHeader() }).then((response) => {
        if (response.data.success) {
          this.$swal({
            type: 'success',
            title: 'Sucess',
            text: 'Criteria added successfully',
            timer: 2000,
          });
        }
      })
    },
  },
}

</script>
<style>
.mx-input {
  height: 60px;
}
.main {
  width: 100%;
}
</style>

<style scoped>
.addNewInstitution label {
  font-weight: 900;
  font-size: 16px;
}
</style>

<style scoped>
.addNewInstitution input,
select {
  height: 60px;
  margin-bottom: 40px;
  border: 2px solid #03913f;
}
.addNewInstitution textarea {
  border: 2px solid #03913f;
}
.addNewInstitution .seperator {
  margin: 2rem 0px 2rem 0px;
  color: #000000;
  font-weight: 900;
  font-size: 25px;
}
.form-group label {
  font-size: 200px !important;
}
#institution {
  width: 100%;
  background: white;
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
