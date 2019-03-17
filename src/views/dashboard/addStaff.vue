<template>
  <div id="institution">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Add Role</b>
      </div>
    </b-row>
    <br>
    <div style="margin-top: 20px;color: #333333; font-size: 15px; font-family: montserrat">
      <b-form @submit.prevent="addRole">
        <b-form-group label="Name" label-for="name" label-align="center">
          <b-form-input
            id="name"
            type="text"
            v-model="object.name"
            required
            placeholder="Enter Role Name"
          />
        </b-form-group>
        <b-form-group label="Description" label-for="weigth" label-align="center">
          <b-form-input
            id="weigth"
            type="text"
            v-model="object.description"
            required
            placeholder="Enter Role Description"
          />
        </b-form-group>
        <b-form-group label="Permission" label-for="permission" label-align="center">
          <multiselect
            v-model="object.permissions"
            tag-placeholder="Add this as new tag"
            placeholder="Add permission"
            label="name"
            track-by="code"
            :options="options"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
          ></multiselect>
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
import Multiselect from 'vue-multiselect';

export default {
  components: { Multiselect },
  data() {
    return {
      object: {
        name: '',
        description: '',
        permissions: [],
      },
      value: [

      ],
      options: [
        { name: 'Level 1', code: '1' },
        { name: 'Level 2', code: '2' },
        { name: 'Level 3', code: '3' }
      ]
    }
  },
  methods: {
    addRole() {
      this.$http.post(url + 'programs', this.object, { headers: getHeader() }).then((response) => {
        if (response.data.success) {
          this.$swal({
            type: 'success',
            title: 'Sucess',
            text: 'Role added successfully',
            timer: 2000,
          });
          this.object.name = '';
          this.object.code = '';
          this.object.category = '';
        }
      })
    },
    // getPermissions() {
    //   this.$http.get(url + `permissions`, { headers: getHeader() }).then((response) => {
    //     console.log(response);
    //   })
    // },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.object.permissions.push(tag)
    },
  },
  //   created() {
  //     this.getPermissions();
  //   }
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
