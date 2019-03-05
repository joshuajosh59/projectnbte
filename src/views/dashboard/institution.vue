<template>
    <div id="institution" :key="pageKey">
        <b-row>
            <div class="top-display">
                <b style="margin-left: 10px; font-size: 20px" class="montserrat">Institution</b>
                <b-btn class="buttons" v-b-modal.modal1>Add Institution</b-btn>
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
                        <th>Institution</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in institutions" :key="i">
                        <td>
                            <label class="form-checkbox">
                                <input type="checkbox" :value="i.id" v-model="selected">
                                <i class="form-icon"></i>
                            </label>
                        </td>
                        <td>{{i.rank}}</td>
                        <td>{{i.name}}</td>
                        <td>{{i.location}}</td>
                        <td>{{i.year_established}}</td>
                        <td>{{i.about}}</td>
                        <td>
                            <!-- <font-awesome-icon class="menu" :icon="['fas', 'ellipsis-v']" size="1x"/> -->
                            <div class="dropdown" style="margin-left: auto; margin-right: 20px">
                                <font-awesome-icon class="menu" :icon="['fas', 'ellipsis-v']" size="1x"/>
                                <ul class="dropdown-menu" style="position: absolute; top: -10px; margin-left: -150px">
                                    <li><a href="#home">Edit Institution</a></li>
                                    <li><a href="#about" @click="deleteInstitution(i.id)">Trash Institution</a></li>
                                </ul>                                                        
                            </div>
                        </td> 
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <b-modal @ok="addInstitution" ok-title="Add" id="modal1" centered title="Add Institution">
            <b-row>
                <b-col md="6">
                    <b-form-input v-model="schoolInfo.name" type="text" placeholder="Institution Name" />
                    <b-form-input v-model="schoolInfo.address" type="text" placeholder="Address" />
                    <b-form-input v-model="schoolInfo.phone" type="text" placeholder="Phone Number" />
                    <b-form-input v-model="schoolInfo.facebook" type="text" placeholder="Facebook URL" />
                    <b-form-input v-model="schoolInfo.linkedin" type="text" placeholder="LinkedIn URL" />
                    <b-form-select style="border-radius: 38px" v-model="schoolInfo.ownership" :options="options1" class="mt-1" />
                    <b-form-input v-model="schoolInfo.location" type="text" placeholder="Location" />
                </b-col>
                <b-col md="6">
                    <b-form-select style="border-radius: 38px" v-model="schoolInfo.category" :options="options" class="" />
                    <b-form-input v-model="schoolInfo.year_established" type="text" placeholder="Year Established" />
                    <b-form-input v-model="schoolInfo.email" type="email" placeholder="Institution Email" />
                    <b-form-input v-model="schoolInfo.twitter" type="text" placeholder="Twitter URL" />
                    <b-form-input v-model="schoolInfo.instagram" type="text" placeholder="Instagram URL" />
                    <b-form-input v-model="schoolInfo.website" type="text" placeholder="Website URL" />
                </b-col> 
            </b-row>
            <b-conatiner>
                <b-form-textarea style="padding-top: 18px" v-model="schoolInfo.about" placeholder="About School" rows="3" max-rows="6"/>
            </b-conatiner>
        </b-modal>
        <b-pagination size="md" :total-rows="lastPage" v-model="currentPage" :per-page="perPage" />
    </div>
</template>

<script>
import { getHeader, url } from '@/config.js'

export default {
    data() {
        return {
            pageKey: 1,
            currentPage: null,
            lastPage: null,
            perPage: null,
            items: [
                { id: '1', number: '119', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/12/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '2', number: '119', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/13/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '3', number: '119', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/14/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '4', number: '119', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/15/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '5', number: '119', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/16/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '3', number: '119', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/14/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '4', number: '119', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/15/2019', notes: 'The universe is a big place, perherps the biggest...'},
                { id: '5', number: '119', title: 'Kaduna Polythecnic', status: 'Published', lastUpdated: '9/16/2019', notes: 'The universe is a big place, perherps the biggest...'},
            ],
            selected: [],
            selectAll: false,
            schoolInfo: {
                name: "",
                category: null,
                email:"",
                about: "",
                address: "",
                phone: "",
                year_established: "",
                facebook: "",
                twitter: "",
                linkedin: "",
                instagram: "",
                ownership: null,
                location: "",
                website: ""
            },
            options: [
                { value: null, text: 'Choose Category' },
                { value: "university", text: 'University' },
                { value: "polytechnic", text: 'Polytechnic' },
                { value: "COE", text: 'College of  Education' },
            ],
            options1: [
                { value: null, text: 'Choose Ownership' },
                { value: "private", text: 'Private' },
                { value: "federalx", text: 'Federal' },
                { value: "state", text: 'State' },
            ],
            institutions: []
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
        addInstitution(){
            this.$http.post(url + 'institutions', this.schoolInfo, {headers: getHeader()}).then((response) => {
                console.log(response.data);
                this.getInstitutions()
            })
        },
        deleteInstitution: function (id){
            this.$http.delete(url + 'institutions/' + id, {headers: getHeader()}).then((response) => {
                this.getInstitutions();
            })
        },
        getInstitutions:function () {
            this.$http.get(url + 'institutions?page=1,size=10').then((response) => {
                this.lastPage = response.data.data.lastPage
                this.institutions = response.data.data.data
                this.perPage = response.data.data.perPage
                this.currentPage = response.data.data.page
            })            
        }
    },
    created: function() {
        this.getInstitutions();
    }
}

</script>

<style scoped>
    #institution {
        width: 100%;
        background: #F6F5FD;
        padding: 20px
    }
    .dropdown a {
        display: block;
        padding: 0.2em 0.8em;
        text-decoration: none;
        background: #ffffff;
        color: #333333;
    }

    .dropdown a:hover {
        background: #e5e5e5;
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
        background: #FF6223;
        color: #FFFFFF;
        border: none;
        margin: 0;
        padding: 0.4em 0.8em;
        font-size: 1em;
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
