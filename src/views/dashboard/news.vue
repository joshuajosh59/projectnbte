<template>
    <div id="news">
        <b-row>
            <div class="top-display">
                <b style="margin-left: 10px; font-size: 20px" class="montserrat">News</b>
                <b-btn class="buttons">Add News</b-btn>
            </div>
        </b-row><br>
        <b-row>
            <b-col md="6">
                <div class="top-display" style="margin-top: 10px">
                    <div class="top-display-items">
                        <p>All(11)</p>
                    </div>
                    <div class="top-display-items green">
                        <p>Mine (8)</p>
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
                        <b-btn class="buttons">Search</b-btn>
                    </div>
                </div>
            </b-col>
        </b-row>
        <div style="margin-top: 20px; color: #333333; font-size: 15px; font-family: montserrat">
            <!-- <b-table striped hover :fields="fields" :items="items">
                <template slot="control" slot-scope="data">
                    <b-form-checkbox id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">
                        119
                    </b-form-checkbox>
                </template>
            </b-table> -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>
                            <label class="form-checkbox">
                                <input type="checkbox" v-model="selectAll" @click="select">
                                <i class="form-icon"></i>
                            </label>
                        </th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in items">
                        <td>
                            <label class="form-checkbox">
                                <input type="checkbox" :value="i.id" v-model="selected"> 119
                                <i class="form-icon"></i>
                            </label>
                        </td>
                        <td>{{i.title}}</td>
                        <td>{{i.status}}</td>
                        <td>{{i.lastUpdated}}</td>
                        <td>{{i.notes}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: '1', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/12/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '2', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/13/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '3', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/14/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '4', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/15/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '5', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/16/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '3', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/14/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '4', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/15/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '5', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/16/2019', notes: 'The universe is a big place, perherps the biggest...'},
           ],
            selected: [],
		    selectAll: false
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
        }
    }
}
</script>

<style scoped>
    #news {
        width: 100%;
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
