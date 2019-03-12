<template>
  <div id="criteria">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Ranking Criteria</b>
        <b-btn class="buttons">Add Criteria</b-btn>
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
            <p>Published (10)</p>
          </div>
          <div class="top-display-items green">
            <p>Draft</p>
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
              <th>Number</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Last Updated</th>
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
              <td>{{i.number}}</td>
              <td>{{i.name}}</td>
              <td>{{i.weight}}</td>
              <td>{{i.lastUpdated}}</td>
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
        { number: '1', name: 'Percentage of programmes with full accreditation', weight: '6', lastUpdated: '9/12/2019' },
        { number: '2', name: 'Percentage of programmes with full accreditation', weight: '8', lastUpdated: '9/13/2019' },
        { number: '3', name: 'Percentage of programmes with full accreditation', weight: '9', lastUpdated: '9/14/2019' },
        { number: '4', name: 'Percentage of programmes with full accreditation', weight: '10', lastUpdated: '9/15/2019' },
        { number: '5', name: 'Percentage of programmes with full accreditation', weight: '4', lastUpdated: '9/16/2019' },
        { number: '3', name: 'Percentage of programmes with full accreditation', weight: '3', lastUpdated: '9/14/2019' },
        { number: '4', name: 'Percentage of programmes with full accreditation', weight: '7', lastUpdated: '9/15/2019' },
        { number: '5', name: 'Percentage of programmes with full accreditation', weight: '2', lastUpdated: '9/16/2019' },
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
  }
}
</script>

<style scoped>
#criteria {
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
</style>
