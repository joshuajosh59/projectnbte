<template>
    <div id="overall">
        <div class="info">
            <b-container><br>
            <div style="padding: 0 50px">
                <div class="icon-container">
                    <font-awesome-icon style="color: white; margin: 5px; transform: rotate(320deg)" icon="key" size="1x"/>
                </div>
                <div style="margin-top: 30px">
                    <b class="open-sans" style="font-size: 18px">Hi there!</b><br><br>
                    <b style="font-size: 14px" class="montserrat">Sign in to institutional Ranking</b><br><br><br>
                    <b style="font-size: 14px; color: #03913F" class="montserrat"> > Learn more aout the ranking methodology</b>
                </div>
            </div>
            </b-container>
        </div>  
        <div class="login-form">
            <b-container>
                <div style="padding: 0 50px">
                    <b-form><br><br>
                        <b class="montserrat" style="font-size: 14px; color: #000;">Email Address</b>
                        <b-form-input id="exampleInput1" type="email" required placeholder="Email" />
                        <br>
                        <b-row>
                            <b-col sm="5"><b class="montserrat" style="font-size: 14px; color: #000;">Password</b></b-col>
                            <b-col sm="7"><b class="montserrat" style="font-size: 14px; color: #03913F;">Forgot your password?</b></b-col>
                        </b-row>
                        <b-form-input id="exampleInput1" type="email" required placeholder="Password" />
                        <br>
                        <b-button type="submit" class="signup">Sign in</b-button> <br>
                        <b></b><br><br><br>
                    </b-form>
                </div>
            </b-container>
        </div>  
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style>
    #overall{
        width: 100%;
        height: 100%;
    }
    .icon-container{
        width: 50px; 
        height: 50px; 
        padding: 10px; 
        background: #03913F;
        border-radius: 7px;
        transform: rotate(45deg);
    }
    .info {
        width: 100%;
        height: auto;
    }
    .login-form {
        background: #F5F6F7;
        width: 100%;
        max-height: 100%;
        margin-top: 40px;
    }
    .open-sans{
        font-family: 'Open Sans', sans-serif;
        color: #262626;
    }
    .montserrat {
        font-family:Montserrat, sans-serif;
        color: #59626A;
    }
    .signup{
        width: 100%;
        background: #03913F !important;
    }
    .form-control{
        margin-top: 5px;
    }
</style>
