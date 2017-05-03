
"use strict;"

    function loadUserGroup() {
    MySql.Execute(
      "dmazzola.com",         // mySQL server
      "mbrandt2",             // login name
      "mbra1200",           // login password
      "test_db_mbrandt2",         // database to use
      "SELECT                       \
        group_name, user_name             \
       FROM                         \
        Groups, Users, UserGroupBridge              \
       WHERE                        \
        Groups.group_id = UserGroupBridge.group_id  \
      AND                       \
        UserGroupBridge.user_id = Users.user_id \
       AND        \
        Users.user_name = 'Madeline';",       
        function (data) {
            processQueryResult(data);
          }
      );
  }
  function processQueryResult(queryReturned) {
    if (!queryReturned.Success) {
      alert(queryReturned.Error)
    } else {
        groups = document.getElementById("groups");
        table       = document.createElement("table");
      for (var i=0; i<queryReturned.Result.length; i++) {
          var tableRow = document.createElement("tr");
          var json = JSON.stringify(queryReturned.Result[i].group_name);
          var groupName = json.replace(/\"/g, "");
          var cell0    = document.createElement("td");
          var cellText = document.createTextNode(groupName);
          var cell1  = document.createElement("td");
          var button = document.createElement("button");
          button.innerHTML="Enter Chat";
          cell0.appendChild(cellText);
          cell1.appendChild(button);
          tableRow.appendChild(cell0);
          tableRow.appendChild(cell1);  
          table.appendChild(tableRow);
          }
          groups.appendChild(table);
        }
      }