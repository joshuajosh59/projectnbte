<template>
  <div id="user">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Users</b>
        <b-btn class="buttons">
          <font-awesome-icon style="margin-right: 3px" :icon="['fas', 'plus']"/>Add User
        </b-btn>
      </div>
    </b-row>
    <br>
    <b-row>
      <b-col md="6">
        <div class="top-display" style="margin-top: 10px">
          <div class="top-display-items">
            <p>All(11)</p>
          </div>
          <div class="top-display-items border-line green">
            <p>Administrator (2)</p>
          </div>
          <div class="top-display-items border-line green">
            <p>Programmes(1)</p>
          </div>
          <div class="top-display-items green">
            <p>Personel(1)</p>
          </div>
          <br>
          <br>
        </div>
      </b-col>
      <b-col md="6">
        <div style="display: flex">
          <div style="flex-grow: 1; width: 350px; margin-left: 40px">
            <input placeholder="Search" class="form-control mx-auto" type="text">
          </div>
          <div style="flex-grow: 1; width: 350px; margin-top: 10px">
            <b-btn class="buttons" style="padding: 8px 40px">Search</b-btn>
          </div>
        </div>
      </b-col>
    </b-row>
    <div style="margin-top: 20px; color: #333333; font-size: 15px; font-family: montserrat">
      <!-- <b-table responsive striped hover :fields="fields" :items="items">
                <template slot="control" slot-scope="data">
                    <b-form-checkbox id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">
                        119
                    </b-form-checkbox>
                </template>
      </b-table>-->
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>
                <label class="form-checkbox">
                  <input type="checkbox" v-model="selectAll" @click="select">
                  <i class="form-icon"></i>
                </label>
              </th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>News</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in items" :key="i">
              <td>
                <label class="form-checkbox">
                  <input type="checkbox" :value="i.id" v-model="selected">
                  <i class="form-icon"></i>
                </label>
              </td>
              <td>{{i.username}}</td>
              <td>{{i.name}}</td>
              <td>{{i.email}}</td>
              <td>{{i.role}}</td>
              <td>{{i.news}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { username: 'Dewole', name: 'Adewole Ajao', email: 'dewole@forum.org.ng', role: 'Administrator', news: '1' },
        { username: 'Joshua', name: 'Joshua Joshua', email: 'dewole@forum.org.ng', role: 'Programmes', news: '2' },
        { username: 'Rashida', name: 'Rashida Umar', email: 'dewole@forum.org.ng', role: 'Personel', news: '10' },
        { username: 'Abednego', name: 'Abednego Kyona', email: 'dewole@forum.org.ng', role: 'Administrator', news: '21' },
      ],
      selected: [],
      selectAll: false
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].id);
        }
      }
    }
  },
  created() {
    (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) ? this.$parent.display = false : true;
  }
}
</script>

<style scoped>
#user {
  width: 100%;
  background: #f6f5fd;
  padding: 20px;
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
.table {
  background: white;
}
.buttons:hover {
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
.form-control {
  border-radius: 38px !important;
  /* max-width: 350px;  */
}
@media (max-width: 1240px) {
  th:nth-child(2),
  td:nth-child(2),
  th:nth-child(4),
  td:nth-child(4),
  th:nth-child(6),
  td:nth-child(6) {
    display: none;
  }
}
</style>
