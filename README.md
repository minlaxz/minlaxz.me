```
Redirect to minlaxz.vercel.app .
```

### three parts:

1. [minlaxz.github.io](minlaxz.github.io) - Frontend using NextJS - submodule
2. [super-drf](super-drf) - Backend using Django REST Framework - submodule
3. [This/*](.) - Containerizing the deploying to AWS

---
### For FE --
- next
- reduxjs/toolkit (state management)
- tailwindcss
- redux-thunk (async)
- [here](https://minlaxz.vercel.app/)

---
### For BE --
- django
- django-rest-framework (DRF)
- django-cors-headers (CORS)
- django-allauth (auth)
- django-fsm (finite state machine)

---
### For DevOps --
- Heroku - [here](https://superduperdrf.herokuapp.com/api/)

- Cloud - [See here](docker-compose.staging.yml)
    + web - (Django container) 
    + db - (PostgreSQL container)
    + nginx-proxy - (NGINX reverse ssl container)

---
---