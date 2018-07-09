$(document).ready(function(e){
    $('#searchUser').on('keyup', function(e){
        var userValue =e.target.value;
        console.log( userValue );

        $.ajax({
            url:'https://api.github.com/users/'+ userValue,
            data:{
                client_id:'7e07bb34ce6cfb0608a8',
                client_secert:'e511ec68294c4888b38e4aff7062c5c3a205279f'
            }
        }).done(function(user){
          console.log(user);
          $('#profile').html(`
          <div class="card">
          <div class="card-header">
            ${user.name}
          </div>
          <div class="Card-body">
          <div class ="container">
          <div class="row">
          <div class="col-lg-3">
          <img src="${user.avatar_url}">
          <a href="${user.html_url}" class="btn btn-danger" >View Profile</a>
        </div>
        </div>
        </div>
        </div>
        
        <div class="card">
        <div class="card-header">
            <span class="badge badge-pill badge-primary">Public Repos:${user.public_repos}</span>
            <span class="badge badge-pill badge-dark">Public Gist:${user.public_gist}</span>
            <span class="badge badge-pill badge-success">Followers:${user.following}</span>
            <span class="badge badge-pill badge-danger">Following:${user.following}</span>
           
           <div class="card"> 
        <ul class="list-group">
        <li class="list-group-item">Company:${user.company}</li>
        <li class="list-group-item">Website/blog:${user.blog}</li>
        <li class="list-group-item">Location:${user.location}</li>
        <li class="list-group-item">Member Since:${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        </div> 
        </div>
       
          `);
        })
    });
});