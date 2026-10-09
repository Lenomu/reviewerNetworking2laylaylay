const sh=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
const m=(q,o,a)=>({t:'mc',q,o,a}),f=(q,v)=>({t:'mc',q,o:['True','False'],a:v?0:1}),s=(q,acc,d)=>({t:'id',q,acc,d});
const mt=g=>g.map(([t,d])=>{const o=sh(g.map(x=>x[1]));return{t:'mc',q:`Match the term with the correct description: ${t}`,o,a:o.indexOf(d)}});
const G1=[['ROUTE','Maps an incoming URL to a specific controller and method'],['MODEL','Manages data and communicates with the database'],['CONTROLLER','Decides what should happen when a specific URL is requested'],['VIEW','Displays information to the user, usually as HTML']];
const G2=[['$allowedFields','Restricts which fields may be mass-assigned during insert or update'],['where()','Filters query results based on a condition'],['findAll()',`Retrieves every record from a Model's table`],['$table','Tells a Model which database table it represents']];
const G3=[['move()','Transfers an accepted uploaded file to a target folder'],['getFile()','Reads an uploaded file object from the request'],['old()','Restores previously submitted input on a redisplayed form'],['Validation rule','Describes what submitted input must satisfy before saving']];
const G4=[['Flash data','Stores a short message for the next request'],['Authentication','Verifies that a user is who they claim to be'],['Session','Stores small user-related data across requests'],['Logout','Removes the authenticated session state']];
const D={
1:[
m(`Given the route $routes->get('/profile/(:num)', 'Pages::profile/$1');, which URL would correctly trigger this route?`,[`/profile`,`/profile/25`,`/pages/profile/25`,`/profile/johndoe`],1),
m(`A student visits a page and gets a "404 Page Not Found" error, even though the controller method exists and runs without issue when tested directly. What is the most likely cause?`,[`The controller method has a typo in its name only visible at runtime`,`The View file has the wrong file extension`,`The database connection failed`,`No route was defined for that URL and no default routing matched it`],3),
m(`A developer argues that since a static PHP array "basically behaves like a small database," there is no real reason to ever migrate a working application to a real database. What is the strongest counterargument?`,[`Static arrays are not permitted inside CodeIgniter controllers`,`A static array's data disappears when the server restarts and cannot be reliably shared, searched, or updated by multiple users the way a database can`,`PHP arrays cannot technically store text data`,`A real database is always slower than a static array`],1),
m(`A view file is saved as app/Views/tasks/index.php, but a controller calls return view('Tasks/Index'); using different capitalization. This works on a Windows machine but fails once deployed to a Linux server. What does this reveal?`,[`View lookups can be case-sensitive depending on the operating system, so the path passed to view() should match the actual file's case`,`The route file must be renamed to match the operating system`,`Linux servers do not support the .php extension`,`Views only work correctly on Windows servers`],0),
m(`Why might a developer choose to use a web framework like CodeIgniter instead of writing an application in plain PHP?`,[`Frameworks automatically generate a complete user interface`,`Frameworks eliminate the need to learn PHP`,`Frameworks do not require a web server`,`Frameworks provide reusable structure and tools, reducing repetitive setup work`],3),
f(`Installing CodeIgniter 4 with Composer is the only way to create a new CodeIgniter project.`,0),
m(`In the MVC pattern, which component is responsible for directly interacting with the database to retrieve or store data?`,[`Controller`,`Router`,`View`,`Model`],3),
f(`A CodeIgniter View file can only contain plain HTML and is not allowed to include any PHP code.`,0),
m(`A developer runs composer create-project codeigniter4/appstarter myproject in the terminal. What is the most likely purpose of this command?`,[`To create a new CodeIgniter 4 project using Composer`,`To install XAMPP`,`To update an existing CodeIgniter installation`,`To generate a new controller file`],0),
m(`Which line of code correctly defines a route that maps the URL /about to the about() method of the Pages controller?`,[`$routes->get('/about', 'Pages::about');`,`$routes->view('about', 'Pages');`,`$routes->controller('Pages@about');`,`$routes->about('Pages::index');`],0),
m(`A team is deciding whether every URL should directly mirror internal controller and method names, or use custom, cleaner routes instead. What is the main benefit of defining custom routes?`,[`Custom routes are required for CodeIgniter to function at all`,`Custom routes automatically connect to a database`,`Custom routes let you design URLs independently of internal class names, so public links do not break when internal code changes`,`Custom routes remove the need for a Controller entirely`],2),
m(`Which function is used inside a CodeIgniter controller method to load and return a View?`,[`show()`,`display()`,`view()`,`render()`],2),
f(`Every folder inside a CodeIgniter 4 project is meant to be publicly accessible from the web server.`,0),
s(`What is the name of the PHP dependency manager commonly used to install CodeIgniter 4?`,['composer'],'Composer'),
f(`In MVC, the Model is responsible for rendering HTML and displaying content to the user.`,0),
f(`Route definitions in CodeIgniter are typically written in the file app/Config/Routes.php.`,1),
f(`In the MVC pattern, the Controller is responsible for deciding which View is displayed in response to a request.`,1),
m(`A developer writes all of an application's HTML directly inside controller methods using echo statements, without using any View files. Why is this generally considered poor practice under the MVC pattern?`,[`CodeIgniter does not allow echo inside controllers`,`It prevents the use of static PHP arrays`,`It mixes presentation code with request-handling logic, making the application harder to maintain`,`It causes routes to stop working entirely`],2),
m(`Which of the following best describes the role of a View in MVC?`,[`It defines the URL structure of the application`,`It focuses only on presentation and displaying data`,`It manages database connections`,`It handles all business logic and decision-making`],1),
f(`A single controller can have multiple methods, each corresponding to a different route or page.`,1),
m(`A controller currently has public function about() { return view('about'); }. A developer wants the About page to also display the current year automatically. What is the correct way to do this?`,[`Hardcode the year directly into the view file`,`Create a completely separate route just for the year`,`Store the year inside Routes.php`,`Pass the year from the controller to the view using an array, e.g. return view('about', ['year' => date('Y')]);`],3),
s(`What is the term for a segment of a route pattern (such as (:num)) that captures part of the URL and passes it to a controller method as a parameter?`,['placeholder','wildcard'],'Route placeholder (wildcard)'),
m(`What is the purpose of the .htaccess file in the public folder of a CodeIgniter project?`,[`It stores database credentials`,`It configures the Composer autoloader`,`It defines routes for the application`,`It removes index.php from the URL through URL rewriting`],3),
s(`What is the name of the function used inside a CodeIgniter controller to load a View file and optionally pass data to it?`,['view'],'view()'),
...mt(G1)],
2:[
m(`Which CodeIgniter file typically stores database connection settings such as hostname, username, and database name?`,[`Database.php only`,`Autoload.php`,`.env`,`Routes.php`],2),
m(`A developer hardcodes a task list directly inside a controller using a PHP array, even though a database table for tasks already exists. What is the main drawback?`,[`Controllers cannot contain arrays`,`Any change to the task list requires editing code, and the two sources of data can fall out of sync`,`PHP arrays cannot store multiple records`,`Views cannot loop through array data`],1),
f(`Every CodeIgniter application must have at least one Model, even if it does not use a database.`,0),
m(`In the typical CodeIgniter data flow, which component calls the Model to retrieve data before passing it to a View?`,[`The Controller`,`The View itself`,`The .env file`,`The route`],0),
m(`Why is CodeIgniter's Query Builder generally considered safer than concatenating raw SQL strings with user input?`,[`Query Builder automatically escapes values, reducing the risk of SQL injection`,`Query Builder does not require a database connection`,`Query Builder is faster to type`,`Raw SQL cannot retrieve more than one row`],0),
m(`Which method would you chain to where('status', 'pending') to sort results by creation date, newest first?`,[`sort('created_at')`,`arrange('created_at', 'newest')`,`orderBy('created_at', 'DESC')`,`filter('created_at')`],2),
m(`A team stores database passwords directly inside a Model's PHP file instead of .env. What is the main problem with this?`,[`It causes Query Builder to stop functioning`,`Models cannot technically store string values`,`Credentials embedded in code are more likely to be exposed and harder to change per environment than values in .env`,`PHP files cannot contain passwords longer than 8 characters`],2),
m(`Which line correctly retrieves all tasks with status 'done' using a TaskModel instance $model?`,[`$model->findAll('status', 'done');`,`$model->filterBy('done');`,`$model->status('done');`,`$model->where('status', 'done')->findAll();`],3),
m(`Which property in a Model tells CodeIgniter which database table the Model represents?`,[`$table`,`$dataset`,`$source`,`$from`],0),
m(`Which Query Builder method retrieves a single record by its primary key?`,[`getById($id)`,`findOne($id)`,`find($id)`,`first($id)`],2),
s(`What is the name of the CodeIgniter file where database connection settings are typically stored?`,['env'],'.env'),
m(`A table has columns id, title, status, created_at. Which line correctly inserts a new row with only a title?`,[`$model->add(['Buy groceries']);`,`$model->new(['title' => 'Buy groceries']);`,`$model->insert(['title' => 'Buy groceries']);`,`$model->create('title', 'Buy groceries');`],2),
m(`After correctly configuring .env and creating a Model, a page still throws a database connection error. Which of these is LEAST likely to be the cause?`,[`The credentials in .env are wrong`,`The database name in .env doesn't match the real database`,`MySQL is not running`,`The view has no <title> tag`],3),
m(`A model defines protected $allowedFields = ['title', 'status']; but a controller tries to insert a record that also includes a description value. What happens?`,[`The insert succeeds, including description`,`The description value is silently ignored because it is not in $allowedFields`,`An exception always halts the application`,`CodeIgniter automatically adds description to $allowedFields`],1),
s(`What Query Builder method sorts retrieved records by a specific column, ascending or descending?`,['orderby'],'orderBy()'),
m(`What does a Model's $allowedFields property control?`,[`Which fields are required to connect to the database`,`Which fields may be mass-assigned during insert() or update()`,`Which columns can be viewed in a browser`,`The order fields appear in a view`],1),
s(`What term describes the special class that represents and manages a specific database table?`,['model'],'Model'),
f(`The .env file is used to store view templates.`,0),
f(`A Model's $allowedFields property lists the columns permitted for mass assignment.`,1),
s(`What term describes an unauthorized attempt to manipulate a database through injected SQL, which Query Builder helps prevent?`,['sqlinjection'],'SQL injection'),
f(`The public folder should contain the application's business logic, including Models.`,0),
m(`What does the $primaryKey property in a Model define?`,[`The database name`,`The first column shown in a view`,`The default sort column for all queries`,`The column CodeIgniter treats as the unique identifier for each row`],3),
...mt(G2)],
3:[
s(`What file input form encoding is required for file uploads?`,['multipart'],'multipart/form-data'),
m(`A page successfully saves a customer but displays a blank list afterward. The controller calls return view('customers/index') without passing records. What should be checked first?`,[`Whether customer data is retrieved and passed to the view.`,`Whether the CSS file has a body tag.`,`Whether the image upload folder exists.`,`Whether the public folder was renamed to app.`],0),
m(`A student saves uploaded avatars before checking file type and size. What is the main risk?`,[`The controller will always skip routing.`,`The browser will not display HTML.`,`The database cannot store filenames.`,`Unsafe or unexpected files may already be stored before rejection.`],3),
m(`What is the main purpose of redisplaying old input after validation fails?`,[`To delete the failed record automatically.`,`To let users correct mistakes without retyping every field.`,`To show the database password.`,`To bypass validation on the second submission.`],1),
m(`Which approach is best when a real system should avoid permanently deleting user accounts?`,[`Run delete() through a GET link.`,`Store deleted records in the view file.`,`Use an archive or deactivation status when possible.`,`Remove validation rules for delete routes.`],2),
m(`Which line moves an uploaded file object named $file into the public uploads folder using a generated name?`,[`$file->copyToDatabase($newName);`,`$file->move(FCPATH . 'uploads', $newName);`,`$file->saveAsRoute($newName);`,`$file->render('uploads');`],1),
m(`A controller wants to update an existing user record after validation succeeds. Which Model method is most appropriate?`,[`render($id, $data)`,`insert($id, $data)`,`update($id, $data)`,`whereOnly($data)`],2),
m(`Which CodeIgniter helper function is commonly placed inside a form to include CSRF protection?`,[`csrf_input_only()`,`csrf_token()`,`csrf_field()`,`protect_form()`],2),
m(`Which statement best describes CRUD?`,[`A CodeIgniter file-upload library.`,`A database credential format.`,`A routing shortcut for GET requests only.`,`The four record actions: create, read, update, and delete.`],3),
m(`Why should validation run before insert() or update() in a CodeIgniter controller?`,[`It automatically creates the database table.`,`It removes the need for routes.`,`It prevents invalid or unsafe input from being saved.`,`It makes the view load before the controller.`],2),
f(`Validation should normally run after saving the submitted data.`,0),
m(`A form field is named email, but the controller validates user_email. What is the most likely result?`,[`Validation will not check the submitted email field correctly.`,`CodeIgniter will combine both names.`,`The route will change automatically.`,`The database will rename the column.`],0),
s(`What helper can print the validation error message for one field in a view?`,['validation_show_error'],'validation_show_error()'),
s(`What acronym refers to Create, Read, Update, and Delete operations?`,['crud'],'CRUD'),
f(`A Model can be used by a controller to insert, update, retrieve, or delete records.`,1),
m(`What does validation_show_error('title') display in a CodeIgniter view?`,[`The controller class name.`,`The uploaded file size.`,`The validation message for the title field.`,`The current route name.`],2),
m(`A developer allows any uploaded file type because only images are expected. What is the best correction?`,[`Move every file first, then decide later.`,`Disable the upload form.`,`Trust the original filename extension.`,`Use file validation rules for allowed image MIME types and maximum size.`],3),
s(`What CodeIgniter constant points to the public front-controller path, often used when saving files under public/uploads?`,['fcpath'],'FCPATH'),
m(`Which validation rule set best restricts an uploaded avatar to JPG or PNG images no larger than 2 MB?`,[`uploaded[avatar]|max_size[avatar,2048]|mime_in[avatar,image/jpg,image/jpeg,image/png]`,`required|min_length[2]`,`valid_email|permit_empty`,`is_unique[avatar]`],0),
f(`The uploaded file's original name should always be trusted as the final server filename.`,0),
m(`Why should a Delete action normally be submitted using POST rather than a normal GET link?`,[`Destructive actions should not be triggered by simple page visits or crawlers.`,`POST is required for all routes.`,`GET cannot open pages.`,`GET routes cannot use controllers.`],0),
m(`Why is a random server filename safer than using the uploaded file's original name?`,[`It automatically compresses the file.`,`It makes images larger.`,`It removes the need for file validation.`,`It reduces name collisions and avoids trusting user-supplied filenames.`],3),
m(`What should be saved in the database after a successful public image upload?`,[`The user's original computer folder path.`,`The contents of $_FILES without checking it.`,`Only the generated filename or path needed to display the file.`,`The entire binary file inside a text column.`],2),
m(`Which CodeIgniter UploadedFile method generates a safer unique filename before moving the file?`,[`newFilename()`,`escapeName()`,`makeSafe()`,`getRandomName()`],3),
f(`A view should normally decide by itself which database record to delete.`,0),
...mt(G3)],
4:[
f(`A login workflow usually redirects after successful authentication.`,1),
f(`A protected page should verify the user's authenticated state before showing restricted content.`,1),
f(`Password verification should work against hashed passwords rather than exposing raw passwords.`,1),
m(`A team wants every protected controller method to repeat the same session-check code. What is a better long-term approach?`,[`Use GET links for logout only.`,`Store login code in each view.`,`Remove authentication entirely.`,`Use a reusable check, filter, or shared helper pattern.`],3),
m(`A login page shows 'Invalid credentials' only after a failed attempt and then the message disappears. What feature most likely supports this?`,[`Route placeholders`,`File upload rules`,`Seeder classes`,`Flash data`],3),
m(`What is the main purpose of logout?`,[`To change the public folder.`,`To remove the user's authenticated session state.`,`To insert a database row.`,`To create a new user record.`],1),
m(`What is the primary purpose of a session in a web application?`,[`To create routes automatically.`,`To store small user-related data across multiple requests.`,`To write CSS rules into views.`,`To permanently replace the database.`],1),
m(`A developer stores the full password hash and user role in session after login. What should be evaluated?`,[`Whether the public folder should store controllers.`,`Whether sessions can replace all database queries.`,`Whether only necessary, non-sensitive session data is stored.`,`Whether views can run without controllers.`],2),
m(`What is flash data best used for?`,[`A permanent user role table.`,`Long-term password storage.`,`A database backup.`,`A message that should be available only for the next request.`],3),
m(`Which line is a reasonable way to set session data in CodeIgniter?`,[`$routes->setSession(true);`,`session()->set(['isLoggedIn' => true]);`,`$model->session('on');`,`view()->set('login');`],1),
s(`What CodeIgniter feature is used for temporary messages such as 'Login successful'?`,['flashdata'],'Flash data'),
s(`What process clears authenticated session data so the user is no longer logged in?`,['logout'],'Logout'),
m(`What is the safest general description of authentication?`,[`Styling a login button.`,`Rendering a database table.`,`Changing all routes to POST.`,`Confirming a user's identity before allowing access.`],3),
m(`Which line is a reasonable way to remove all authentication session data on logout?`,[`$routes->deleteAll();`,`$model->dropSessionTable();`,`view('logout')->erase();`,`session()->destroy();`],3),
m(`A user logs in successfully, but protected pages still redirect to login. What should be checked first?`,[`Whether the public folder contains images.`,`Whether the CSS file is minified.`,`Whether the expected session key is set and read consistently.`,`Whether the database table has a title column.`],2),
f(`Logout should leave the authenticated session values untouched.`,0),
m(`Why should access-control checks happen before displaying protected content?`,[`To make CSS files load faster.`,`To prevent unauthorized users from seeing restricted pages.`,`To avoid using routes.`,`To remove the need for HTML.`],1),
m(`What is a common reason to redirect after processing login?`,[`It changes the PHP version.`,`It deletes the controller.`,`It prevents the same form submission from being repeated by browser refresh.`,`It disables validation.`],2),
m(`A controller checks if session()->get('isLoggedIn') is true before returning the dashboard view. What security goal does this support?`,[`Database migration`,`Route caching only`,`Image resizing`,`Session-based access control`],3),
m(`Which CodeIgniter service is commonly used to access session functionality?`,[`session()`,`view()`,`service('routes')`,`model()`],0),
m(`Which session value would be reasonable to store after login?`,[`The user's plaintext password.`,`The Composer executable file.`,`The logged-in user's id or username.`,`The complete database dump.`],2),
s(`What term refers to the process of verifying a user's identity?`,['authentication'],'Authentication'),
f(`Session-based authentication removes the need to validate login input.`,0),
m(`Which behavior indicates a protected page is working correctly?`,[`The route ignores session data.`,`Unauthenticated users are redirected to login.`,`Every visitor can open it directly.`,`The view bypasses the controller.`],1),
f(`Session data can persist across multiple HTTP requests for the same user.`,1),
m(`A protected page relies only on hiding menu links, but the route can still be opened manually. What is the main weakness?`,[`The controller has a comment.`,`The server-side access check is missing or incomplete.`,`The .env file is too short.`,`The HTML table has too many rows.`],1),
...mt(G4)]};

const $=q=>document.querySelector(q),A=$('#a');
let V='r',M=1,i=0,C;
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const nz=t=>t.toLowerCase().replace(/[\s()]/g,'');
const ok=(q,v)=>v!=null&&v!==''&&(q.t=='id'?q.acc.some(a=>nz(v).includes(a)):v===q.a);
const pool=k=>k?D[k]:[1,2,3,4].flatMap(x=>D[x]);
const ans=q=>q.t=='id'?q.d:q.o[q.a];

function body(q,n,t,v,r){
 const d=r&&v!=null;
 let h=`<div class=mu>Question ${n} of ${t}</div><h2>${esc(q.q)}</h2>`;
 if(q.t=='id')h+=`<div class=idr><input id=in value="${esc(v||'')}" placeholder="Type your answer" autocomplete=off ${d?'disabled':''}>${r?`<button id=ck ${d?'disabled':''}>Check</button>`:''}</div>`+(d?`<p class=fb>${ok(q,v)?'<b>Correct</b>':'Answer: <b>'+esc(q.d)+'</b>'}</p>`:'');
 else h+=q.o.map((o,k)=>`<button class="opt ${d?(k==q.a?'ok':k==v?'no':''):(k===v?'pick':'')}" data-o=${k}>${esc(o)}</button>`).join('');
 return h}

function R(){V='r';const L=pool(M),q=L[i];
 A.innerHTML=`<div class=tabs>${[1,2,3,4,0].map(k=>`<button class="tab ${k==M?'on':''}" data-m=${k}>${k?'Module '+k:'All'}</button>`).join('')}<button class=cta id=go>Start Challenge</button></div><div class=main><section>${body(q,i+1,L.length,q.sel,1)}<div class=nav><button id=pv ${i?'':'disabled'}>Previous</button><button id=nx ${i<L.length-1?'':'disabled'}>Next</button></div></section><aside><div class=grid>${L.map((x,k)=>`<button class="n ${x.sel==null?'':ok(x,x.sel)?'ok':'no'} ${k==i?'cur':''}" data-k=${k}>${k+1}</button>`).join('')}</div></aside></div>`}

function K(){V='c';const q=C.L[C.i],last=C.i==C.L.length-1;
 A.innerHTML=`<section class=ch>${body(q,C.i+1,C.L.length,C.a[C.i],0)}<div class=nav><button id=pv ${C.i?'':'disabled'}>Previous</button><button id=nx>${last?'Finish':'Next'}</button></div></section>`}

function F(){V='x';const t=C.L.length,n=C.L.filter((q,k)=>ok(q,C.a[k])).length;
 A.innerHTML=`<div class=res><div class=mu>Challenge complete</div><div class=sc>${n}<span class=mu>/${t}</span></div><p class=mu>${Math.round(n/t*100)}%</p><div class=tabs><button id=again>Retake</button><button id=back>Back to reviewer</button></div>`+C.L.map((q,k)=>{const v=C.a[k],g=ok(q,v);return `<div class="r ${g?'g':''}"><div class=mu>${k+1} · ${g?'Correct':'Incorrect'}</div><div>${esc(q.q)}</div><div class=mu>Your answer: ${v==null||v===''?'—':esc(q.t=='id'?v:q.o[v])}</div>${g?'':`<div>Correct: <b>${esc(ans(q))}</b></div>`}</div>`}).join('')+`</div>`;scrollTo(0,0)}

A.onclick=e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset,id=b.id;
 if(V=='r'){const L=pool(M),q=L[i];
  if(d.m!=null){M=+d.m;i=0}
  else if(d.k!=null)i=+d.k;
  else if(d.o!=null){if(q.sel==null)q.sel=+d.o}
  else if(id=='ck'){const v=$('#in').value;if(v.trim())q.sel=v}
  else if(id=='pv')i--;else if(id=='nx')i++;
  else if(id=='go'){C={L:sh(L),a:[],i:0};return K()}
  R()}
 else if(V=='c'){
  if(d.o!=null)C.a[C.i]=+d.o;
  else if(id=='pv')C.i--;
  else if(id=='nx'){if(C.i==C.L.length-1)return F();C.i++}
  K()}
 else if(id=='again'){C={L:sh(C.L),a:[],i:0};K()}
 else if(id=='back'){i=0;R()}};
A.oninput=e=>{if(V=='c')C.a[C.i]=e.target.value};
A.onkeydown=e=>{if(e.key=='Enter'&&e.target.id=='in'&&V=='r')$('#ck').click()};
R();
