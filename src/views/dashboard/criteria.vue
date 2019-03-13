<template>
    <div id="criteria">
        <b-row>
            <div class="top-display">
                <b style="margin-left: 10px; font-size: 20px" class="montserrat">Ranking Criteria</b>
                <b-btn class="buttons">Add Criteria</b-btn>
            </div>
        </b-row><br>
        <b-row>
            <b-col md="6">
                <div class="top-display" style="margin-top: 10px">
                    <div class="top-display-items">
                        <p>All(11)</p>
                    </div>
                    <div class="top-display-items green">
                        <p>Published (10)</p>
                    </div>
                    <div class="top-display-items green">
                        <p>Draft</p>
                    </div><br><br>
                </div>
            </b-col>
            <b-col md="6">
                <div style="display: flex">
                    <div style="flex-grow: 1; width: 350px; margin-left: 40px">
                        <input placeholder="Search" class="form-control mx-auto" type="text"/>
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
            </b-table> -->
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
                    <tr v-for="i in criteria" :key="i.id">
                        <td>
                            <label class="form-checkbox">
                                <input type="checkbox" :value="i.id" v-model="selected">
                                <i class="form-icon"></i>
                            </label>
                        </td>
                        <td>{{i.id}}</td>
                        <td>{{i.name}}</td>
                        <td>{{i.weight}}</td>
                        <td>{{i.updated_at}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
import { url } from '@/config.js'

export default {
    data() {
        return {
            selected: [],
            selectAll: false,
            criteria: []
        }
    },
    methods:{ 
        select() {
            this.selected = [];
            if (!this.selectAll) {
                for (let i in this.items) {
                    this.selected.push(this.items[i].id);
                }
            }
        },
        getCriteria: function () {
            this.$http.get( url + 'criteria?page=1&size=10').then((response) => {
                console.log(response.data.data.data)
                this.criteria = response.data.data.data
            })
        }
    },
    created(){
        this.getCriteria();
    }
}
</script>

<style scoped>
    #criteria {
        width: 100%;
        background: #F6F5FD;
        padding: 20px
    }
    .open-sans{
        font-family: 'Open Sans', sans-serif;
        color: #262626;
    }
    tr:nth-child(even) {
        background: rgba(3, 145, 62, 0.144);
        border-left: 1px solid #03913F ;
    }
    .montserrat {
        font-family:Montserrat, sans-serif;
        color: #333333;
    }
    .top-display{
        display: flex;
        margin-top: 20px
    }
    .buttons{
        margin-left:10px; 
        margin-top: -5px;
        border-radius: 38px;
        background: #03913F;
    }
    .table{
        background: white;
    }
    .buttons:hover{
        background: #fff;
        color: #03913F;
    }
    .top-display-items{
        margin-left: 20px;
        font-size: 15px;
        border-right: 1px solid #333333;
        padding: 0 20px 0 0;
        max-height: 22px;
    }
    .green{
        color: #03913F;
    }
    .form-control{
        border-radius: 38px !important;
        /* max-width: 350px;  */
    }
</style>
