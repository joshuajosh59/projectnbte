<template>
    <div>
        <div class="top-nav">
            <div class="inner-brand">
                <div>
                    <b-row>
                        <font-awesome-icon @click="toggleNav" class="menu" :icon="['fas', 'bars']" size="2x"/>                        
                        <b style="color: white; font-size: 26px" class="montserrat brand">NBTE</b>
                    </b-row>
                </div>
                <div style="flex-grow: 1; width: 350px; margin-left: 40px">
                    <input placeholder="Search" class="form-control mx-auto" type="text"/>
                </div>
                <div style="padding: 0 20px">
                    <font-awesome-icon style="color: white; margin: 12px;" :icon="['far', 'bell']" size="1x"/>
                </div>
                <div style="padding: 0 10px">
                    <img src="./../../assets/Library-2-700x338.jpg" style="border-radius: 100%; margin-top: 5px" width="30" height="30" />
                </div>
                <div style="margin-right: 30px">
                    <p class="open-sans mt-2 name" style="color: white">Engr. Alabi Taiwo</p>
                </div>
            </div>
        </div>
        <b-row>
            <b-col sm="2" class="side-nav" v-show="display">
                <ul class="side-links montserrat">
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'th']" size="2x"/><span class="span">Overview</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'university']" size="2x"/><span class="span">Institution</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'list-alt']" size="2x"/><span class="span">Criteria</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'book-open']" size="2x"/><span class="span">Programme</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['far', 'bell']" size="2x"/><span class="span">News</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'bookmark']" size="2x"/><span class="span">Pages</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'user-alt']" size="2x"/><span class="span">Users</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'user-tie']" size="2x"/><span class="span">Staff</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'th-large']" size="2x"/><span class="span">Menu</span></li>
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'cog']" size="2x"/><span class="span">Settings</span></li><hr style="border: 0.4px solid #EFEFEF">
                    <li class="list-link"><font-awesome-icon style="color: white; padding-top: 10px; padding-right: 15px;" :icon="['fas', 'book-reader']" size="2x"/><span class="span">Documentation</span></li>
                </ul>
            </b-col>
            <b-col md="10"></b-col> 
        </b-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            display: true            
        }
    },
    methods : {
        toggleNav: function () {
            this.display = !this.display
        }
    }
}
</script>

<style scoped>
    .top-nav {
        background: #03913F;
        height: 60px;
        width: 100%;
    }
    .open-sans{
        font-family: 'Open Sans', sans-serif;
        color: #262626;
    }
    .montserrat {
        font-family:Montserrat, sans-serif;
        color: #59626A;
    }
    .inner-brand {
        padding: 7px 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .form-control{
        border-radius: 40px !important;
        max-width: 350px; 
        margin-top: 2px !important;
    }
    .side-nav{
        height: 100%;
        background: #03913F;
        position: fixed;
        min-width: 200px;
        max-width: 200px;
        display: block;
    }
    .side-links{
        list-style: none;
    }
    .list-link{
        padding: 8px 0;
    }
    .span{
        color: rgb(255, 255, 255) !important;
        font-size: 14px;
    }
    .menu{
        display: none;
        color: white;
        margin: 5px 0;
        cursor: pointer;
    }

    @media (max-width: 920px) {
        .name{
            display: none;
        }
    }

    @media (max-width: 605px) {
        .menu{
            display: block !important;
        }
        .brand{
            display: none;
        }
    }
</style>
