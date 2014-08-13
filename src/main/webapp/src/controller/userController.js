 App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            
            var model = $('#userForm').serializeObject();
            var name = model["firstName"];
            var lastName = model["lastName"];
            var date = model["date"];
            var mensaje = 'El usuario '+ name +' '+ lastName +' nació el '+ date;
            
            
            
            var pos = document.getElementById('guardar');
            var p = document.createElement('p');
            p.innerHTML = mensaje;
            

            pos.appendChild(p);
            
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        },
        
    });