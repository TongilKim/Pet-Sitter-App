(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    192: function (e, a, t) {
      e.exports = t(265);
    },
    197: function (e, a, t) {},
    248: function (e, a) {},
    264: function (e, a, t) {},
    265: function (e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        r = t.n(n),
        l = t(14),
        c = t.n(l),
        i = (t(197), t(150)),
        o = t(151),
        s = t(65),
        m = t(174),
        u = t(173),
        g = t(338),
        p = t(16),
        d = t(9),
        f = t.n(d),
        E = t(171),
        h = Object(E.a)({
          typography: {
            fontFamily: '"Roboto"',
            fontSize: 12,
            h1: { fontSize: 30, fontWeight: 500 },
            h2: { fontSize: 20, fontWeight: 400 },
            h5: { fontSize: 18, fontWeight: 400 },
            h6: { fontSize: 15, fontWeight: 500 },
          },
          palette: { primary: { main: '#DF1B1B' }, secondary: { main: '#4caf50' } },
        }),
        b = t(97),
        v = t(4),
        y = t(20),
        O = t(6),
        N = t(324),
        j = t(325),
        x = t(326),
        S = t(327),
        w = t(307),
        D = t(328),
        T = t(314),
        k = t(348),
        I = t(155),
        C = Object(I.a)(),
        M = t(308),
        Y = t(309),
        P = t(36),
        L = t(310),
        B = t(344),
        R = t(345),
        F = t(316),
        W = t(317),
        A = t(318),
        H = t(347),
        q = t(341);
      function z(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 6, variant: 'filled' }, e));
      }
      var U = Object(O.a)(function (e) {
        return {
          form: { display: 'flex', flexDirection: 'column', margin: 'auto', width: 450 },
          title: { textAlign: 'center', fontWeight: '1000' },
          inputLabel: { marginTop: e.spacing(3), fontWeight: '900', fontSize: '12px' },
        };
      })(function (e) {
        var a = Object(n.useState)(!1),
          t = Object(v.a)(a, 2),
          l = t[0],
          c = t[1],
          i = Object(n.useState)(''),
          o = Object(v.a)(i, 2),
          s = o[0],
          m = o[1],
          u = Object(n.useState)(''),
          g = Object(v.a)(u, 2),
          p = g[0],
          d = g[1],
          E = Object(n.useState)(''),
          h = Object(v.a)(E, 2),
          b = h[0],
          y = h[1],
          O = Object(n.useState)(''),
          N = Object(v.a)(O, 2),
          j = N[0],
          x = N[1],
          S = Object(n.useState)(!1),
          D = Object(v.a)(S, 2),
          T = D[0],
          k = D[1],
          I = function (e, a) {
            'clickaway' !== a && k(!1);
          },
          q = function () {
            var e = '',
              a = '';
            return (
              s.includes('@') || (e = 'Invalid email'),
              p.length < 6 && (a = 'Password Can not be less than 6 length'),
              (!e && !a) || (y(e), x(a), !1)
            );
          },
          U = e.classes;
        return r.a.createElement(
          'form',
          null,
          r.a.createElement(
            w.a,
            {
              size: 'large',
              variant: 'outlined',
              color: 'primary',
              onClick: function () {
                return c(!l);
              },
              style: { marginRight: '17px' },
            },
            'LOGIN'
          ),
          r.a.createElement(
            M.a,
            {
              maxWidth: 'md',
              open: l,
              onClose: function () {
                return c(!l);
              },
              'aria-labelledby': 'form-dialog-title',
            },
            r.a.createElement(
              Y.a,
              { id: 'form-dialog-title', className: U.title },
              r.a.createElement(P.a, { variant: 'h4' }, 'Login')
            ),
            r.a.createElement(
              L.a,
              null,
              r.a.createElement(
                'form',
                { className: U.form },
                r.a.createElement(
                  L.a,
                  { className: U.textFieldContainer },
                  r.a.createElement(
                    B.a,
                    { color: 'primary', required: !0, className: U.inputLabel },
                    'EMAIL ADDRESS'
                  ),
                  r.a.createElement(R.a, {
                    autoFocus: !0,
                    fullWidth: !0,
                    margin: 'dense',
                    id: 'email',
                    placeholder: 'Your Email',
                    type: 'email',
                    variant: 'outlined',
                    color: 'primary',
                    value: s,
                    onChange: function (e) {
                      return m(e.target.value);
                    },
                  }),
                  r.a.createElement(
                    'div',
                    { className: U.errMsg },
                    b.length > 0 ? r.a.createElement(z, { severity: 'error' }, b) : ''
                  ),
                  r.a.createElement('br', null),
                  r.a.createElement(B.a, { color: 'primary', className: U.inputLabel }, 'PASSWORD'),
                  r.a.createElement(R.a, {
                    fullWidth: !0,
                    margin: 'dense',
                    id: 'email',
                    placeholder: 'Your password',
                    type: 'password',
                    variant: 'outlined',
                    color: 'primary',
                    value: p,
                    onChange: function (e) {
                      return d(e.target.value);
                    },
                  }),
                  r.a.createElement(
                    'div',
                    { className: U.errMsg },
                    j.length > 0 ? r.a.createElement(z, { severity: 'error' }, j) : ''
                  )
                )
              )
            ),
            r.a.createElement(
              F.a,
              { className: U.form },
              r.a.createElement(
                w.a,
                {
                  variant: 'contained',
                  color: 'primary',
                  size: 'large',
                  component: W.a,
                  to: '/list',
                  onClick: function (e) {
                    q() &&
                      f.a
                        .post('users/login', { userEmail: s, password: p })
                        .then(function (e) {
                          200 === e.status &&
                            (localStorage.setItem('loginToken', e.data.accessToken),
                            m(''),
                            d(''),
                            y(''),
                            x(''),
                            C.push('/list'),
                            window.location.reload());
                        })
                        .catch(function (e) {
                          k(!0);
                        });
                  },
                  style: { marginTop: '20px' },
                },
                'Login'
              ),
              r.a.createElement(
                A.a,
                { className: U.inputLabel },
                'Not a member?',
                ' ',
                r.a.createElement(W.a, { href: '#', color: 'primary' }, 'Sign Up')
              )
            )
          ),
          r.a.createElement(
            H.a,
            { open: T, autoHideDuration: 2e3, onClose: I },
            r.a.createElement(z, { onClose: I, severity: 'error' }, 'Incorrect Email or Password!')
          )
        );
      });
      function G(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 6, variant: 'filled' }, e));
      }
      var V = Object(O.a)(function (e) {
          return {
            form: { display: 'flex', flexDirection: 'column', margin: 'auto', width: 450 },
            title: { textAlign: 'center', fontWeight: '1000' },
            inputLabel: { fontWeight: '900', fontSize: '12px' },
            errMsg: { width: '100%' },
          };
        })(function (e) {
          var a = Object(n.useState)(!1),
            t = Object(v.a)(a, 2),
            l = t[0],
            c = t[1],
            i = Object(n.useState)(''),
            o = Object(v.a)(i, 2),
            s = o[0],
            m = o[1],
            u = Object(n.useState)(''),
            g = Object(v.a)(u, 2),
            p = g[0],
            d = g[1],
            E = Object(n.useState)(''),
            h = Object(v.a)(E, 2),
            b = h[0],
            y = h[1],
            O = Object(n.useState)(''),
            N = Object(v.a)(O, 2),
            j = N[0],
            x = N[1],
            S = Object(n.useState)(''),
            D = Object(v.a)(S, 2),
            T = D[0],
            k = D[1],
            I = Object(n.useState)(''),
            C = Object(v.a)(I, 2),
            q = C[0],
            z = C[1],
            U = Object(n.useState)(''),
            V = Object(v.a)(U, 2),
            _ = V[0],
            K = V[1],
            Q = Object(n.useState)(!1),
            J = Object(v.a)(Q, 2),
            $ = J[0],
            Z = J[1],
            X = Object(n.useState)(!1),
            ee = Object(v.a)(X, 2),
            ae = ee[0],
            te = ee[1],
            ne = function (e, a) {
              'clickaway' !== a && (Z(!1), te(!1));
            },
            re = function () {
              var e = '',
                a = '',
                t = '';
              return (
                (p && b) || (e = 'Name cannot be blank'),
                s.includes('@') || (a = 'Invalid email'),
                j.length < 6 && (t = 'Password Can not be less than 6 length'),
                !(a || e || t) || (z(a), k(e), K(t), !1)
              );
            },
            le = e.classes;
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(
              w.a,
              {
                size: 'large',
                variant: 'contained',
                color: 'primary',
                onClick: function () {
                  return c(!l);
                },
              },
              'SIGN UP'
            ),
            r.a.createElement(
              M.a,
              {
                maxWidth: 'md',
                open: l,
                onClose: function () {
                  return c(!l);
                },
                'aria-labelledby': 'form-dialog-title',
              },
              r.a.createElement(
                Y.a,
                { id: 'form-dialog-title', className: le.title },
                r.a.createElement(P.a, { variant: 'h4' }, 'Sign Up')
              ),
              r.a.createElement(
                L.a,
                null,
                r.a.createElement(
                  'form',
                  { className: le.form },
                  r.a.createElement(
                    L.a,
                    { className: le.textFieldContainer },
                    r.a.createElement(
                      B.a,
                      { color: 'primary', required: !0, className: le.inputLabel },
                      'EMAIL ADDRESS'
                    ),
                    r.a.createElement(R.a, {
                      autoFocus: !0,
                      fullWidth: !0,
                      margin: 'dense',
                      id: 'email',
                      placeholder: 'Your Email',
                      type: 'email',
                      variant: 'outlined',
                      color: 'primary',
                      value: s,
                      onChange: function (e) {
                        return m(e.target.value);
                      },
                    }),
                    r.a.createElement(
                      'div',
                      { className: le.errMsg },
                      q.length > 0 ? r.a.createElement(G, { severity: 'error' }, q) : ''
                    ),
                    r.a.createElement('br', null),
                    r.a.createElement(
                      B.a,
                      { color: 'primary', className: le.inputLabel },
                      'FIRST NAME'
                    ),
                    r.a.createElement(R.a, {
                      fullWidth: !0,
                      margin: 'dense',
                      id: 'firstName',
                      placeholder: 'Your first name',
                      type: 'firstName',
                      variant: 'outlined',
                      color: 'primary',
                      value: p,
                      onChange: function (e) {
                        return d(e.target.value);
                      },
                    }),
                    r.a.createElement(
                      'div',
                      { className: le.errMsg },
                      T.length > 0 ? r.a.createElement(G, { severity: 'error' }, T) : ''
                    ),
                    r.a.createElement('br', null),
                    r.a.createElement(
                      B.a,
                      { color: 'primary', className: le.inputLabel },
                      'LAST NAME'
                    ),
                    r.a.createElement(R.a, {
                      fullWidth: !0,
                      margin: 'dense',
                      id: 'lastName',
                      placeholder: 'Your last name',
                      type: 'lastName',
                      variant: 'outlined',
                      color: 'primary',
                      value: b,
                      onChange: function (e) {
                        return y(e.target.value);
                      },
                    }),
                    r.a.createElement(
                      'div',
                      { className: le.errMsg },
                      T.length > 0 ? r.a.createElement(G, { severity: 'error' }, T) : ''
                    ),
                    r.a.createElement('br', null),
                    r.a.createElement(
                      B.a,
                      { color: 'primary', className: le.inputLabel },
                      'PASSWORD'
                    ),
                    r.a.createElement(R.a, {
                      fullWidth: !0,
                      margin: 'dense',
                      id: 'password',
                      placeholder: 'Create a password',
                      type: 'password',
                      variant: 'outlined',
                      color: 'primary',
                      value: j,
                      onChange: function (e) {
                        return x(e.target.value);
                      },
                    }),
                    r.a.createElement(
                      'div',
                      { className: le.errMsg },
                      _.length > 0 ? r.a.createElement(G, { severity: 'error' }, _) : ''
                    )
                  )
                )
              ),
              r.a.createElement(
                F.a,
                { className: le.form },
                r.a.createElement(
                  w.a,
                  {
                    variant: 'contained',
                    color: 'primary',
                    size: 'large',
                    onClick: function (e) {
                      if (re()) {
                        var a = { firstName: p, lastName: b, userEmail: s, password: j };
                        f.a
                          .post('/users/add', a)
                          .then(function (e) {
                            e.data.error
                              ? te(!0)
                              : (m(''), x(''), k(''), z(''), K(''), c(!1), Z(!0), te(!1));
                          })
                          .catch(function (e) {
                            console.log(e);
                          });
                      }
                    },
                  },
                  'Sign Up'
                ),
                r.a.createElement(
                  A.a,
                  { className: le.inputLabel },
                  'Already a member?',
                  ' ',
                  r.a.createElement(W.a, { href: '#', color: 'primary' }, 'Login')
                )
              )
            ),
            r.a.createElement(
              H.a,
              { open: ae, autoHideDuration: 3e3, onClose: ne },
              r.a.createElement(
                G,
                { onClose: ne, severity: 'error' },
                'Entered email is already exist!'
              )
            ),
            r.a.createElement(
              H.a,
              { open: $, autoHideDuration: 3e3, onClose: ne },
              r.a.createElement(G, { onClose: ne, severity: 'success' }, 'Successfully Signed up!')
            )
          );
        }),
        _ = t(320),
        K = t(315),
        Q = t(269),
        J = t(323),
        $ = t(322),
        Z = t(321),
        X = t(8),
        ee = t.n(X),
        ae = Object(_.a)(function (e) {
          return {
            root: { width: '100%', maxWidth: '55ch', backgroundColor: e.palette.background.paper },
            inline: { marginTop: '10px' },
            link: { textDecoration: 'none', color: 'black' },
          };
        });
      function te(e) {
        var a = ae(),
          t = Object(n.useState)([]),
          l = Object(v.a)(t, 2),
          c = l[0],
          i = l[1],
          o = Object(n.useState)(!1),
          s = Object(v.a)(o, 2),
          m = s[0],
          u = s[1],
          g = Object(n.useState)(''),
          p = Object(v.a)(g, 2),
          d = (p[0], p[1], Object(n.useState)('')),
          E = Object(v.a)(d, 2),
          h = E[0],
          b = E[1],
          y = function (e) {
            var a = e.currentTarget.getAttribute('value');
            m
              ? f.a.put('/request/readSitterConfirm/'.concat(a)).then(function (e) {
                  e.data.error || (C.push('/requests'), window.location.reload());
                })
              : f.a.put('/request/readOwnerRequest/'.concat(a)).then(function (e) {
                  e.data.error || (C.push('/jobs'), window.location.reload());
                });
          };
        return (
          Object(n.useEffect)(
            function () {
              0 !== e.notifications.length &&
                (Object.keys(e.notifications[0]).length > 5
                  ? (i(e.notifications), u(!0), b('Dog Owner'))
                  : (i(e.notifications), u(!1), b('Dog sitting')));
            },
            [e]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            c.length > 0
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    K.a,
                    { className: a.root },
                    c.map(function (e) {
                      return r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          Q.a,
                          {
                            key: e.requestID,
                            onClick: y,
                            value: e.requestID,
                            alignItems: 'flex-start',
                          },
                          r.a.createElement(
                            Z.a,
                            null,
                            r.a.createElement(k.a, {
                              alt: 'Remy Sharp',
                              src:
                                'https://team-kiwi.s3.ca-central-1.amazonaws.com/' + e.profileImg,
                            })
                          ),
                          r.a.createElement($.a, {
                            primary: ''.concat(e.firstName, ' ').concat(e.notifyMsg),
                            secondary: r.a.createElement(
                              n.Fragment,
                              null,
                              r.a.createElement(P.a, { variant: 'body2' }, h),
                              r.a.createElement(
                                P.a,
                                { variant: 'body1', className: a.inline, color: 'textPrimary' },
                                ee()(e.requestedDate).format('YYYY-MM-DD HH:mm')
                              )
                            ),
                          })
                        ),
                        r.a.createElement(J.a, { variant: 'inset', component: 'li' })
                      );
                    })
                  )
                )
              : r.a.createElement('div', null)
          )
        );
      }
      var ne = t(54),
        re = t.n(ne);
      var le = Object(O.a)(function (e) {
          return {
            appBar: { height: e.spacing(9), borderBottom: '1px solid '.concat(e.palette.divider) },
            toolbar: { display: 'flex', flexDirection: 'row', margin: e.spacing(0.5) },
            logo: { flexGrow: 1 },
            link: { margin: e.spacing(0, 4.5) },
            avatar: { width: e.spacing(6), height: e.spacing(6) },
          };
        })(function (e) {
          var a = Object(n.useState)(!1),
            t = Object(v.a)(a, 2),
            l = t[0],
            c = t[1],
            i = Object(n.useState)(null),
            o = Object(v.a)(i, 2),
            s = o[0],
            m = o[1],
            u = Object(n.useState)(null),
            g = Object(v.a)(u, 2),
            p = g[0],
            d = g[1],
            E = Object(n.useState)([]),
            h = Object(v.a)(E, 2),
            O = h[0],
            I = h[1],
            M = Object(n.useState)(!0),
            Y = Object(v.a)(M, 2),
            P = Y[0],
            L = Y[1];
          Object(n.useEffect)(
            function () {
              null !== localStorage.getItem('loginToken') &&
                f.a.get('/profile/ref/'.concat(e.userID)).then(function (e) {
                  var a = e.data;
                  m(''.concat('https://team-kiwi.s3.ca-central-1.amazonaws.com/' + a.profileImg));
                  var t = a;
                  f.a.get('/request/getSitterRequest/'.concat(t._id)).then(function (e) {
                    var a = e.data;
                    if (0 !== a.length) {
                      var n = re.a.connect('http://localhost:4000/request');
                      void 0 !== n &&
                        (n.emit('updateRequests', a),
                        n.on('requestsFromOwner', function (e) {
                          if (e.length > 0)
                            for (
                              var a = function (a) {
                                  e[a].readStatus ||
                                    (L(!1),
                                    Object.assign(e[a], {
                                      notifyMsg: 'has requested your service',
                                    }),
                                    I(function (t) {
                                      return [].concat(Object(b.a)(t), [e[a]]);
                                    }));
                                },
                                t = 0;
                              t < e.length;
                              t++
                            )
                              a(t);
                        }));
                    } else
                      f.a.get('/request/getConfirmedRequest/'.concat(t.userID)).then(function (e) {
                        var a = e.data;
                        if (0 !== a.length) {
                          var t = re.a.connect('http://localhost:4000/confirm');
                          t.emit('updateConfirms', a),
                            t.on('confirmsFromSitter', function (e) {
                              if (e.length > 0)
                                for (
                                  var a = function (a) {
                                      e[a].acceptedStatus &&
                                        !e[a].readStatus &&
                                        (L(!1),
                                        Object.assign(e[a], {
                                          notifyMsg: 'has accepted your request',
                                        }),
                                        I(function (t) {
                                          return [].concat(Object(b.a)(t), [e[a]]);
                                        })),
                                        e[a].declinedStatus &&
                                          !e[a].readStatus &&
                                          (L(!1),
                                          Object.assign(e[a], {
                                            notifyMsg: 'has declined your request',
                                          }),
                                          I(function (t) {
                                            return [].concat(Object(b.a)(t), [e[a]]);
                                          }));
                                    },
                                    t = 0;
                                  t < e.length;
                                  t++
                                )
                                  a(t);
                            });
                        }
                      });
                  }),
                    c(!0);
                });
            },
            [e]
          );
          var B = e.classes,
            R = Boolean(p),
            F = R ? 'simple-popover' : void 0;
          return r.a.createElement(
            'div',
            null,
            l
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(N.a, null),
                  r.a.createElement(
                    j.a,
                    { position: 'static', color: 'default', elevation: 0, className: B.appBar },
                    r.a.createElement(
                      x.a,
                      { className: B.toolbar },
                      r.a.createElement(
                        y.b,
                        { to: '/list' },
                        r.a.createElement('img', { src: '/images/logo.png', alt: '' })
                      ),
                      r.a.createElement(
                        S.a,
                        {
                          container: !0,
                          alignItems: 'center',
                          justify: 'flex-end',
                          direction: 'row',
                        },
                        r.a.createElement(
                          w.a,
                          { component: y.b, to: '/list', className: B.link },
                          'sitter list'
                        ),
                        r.a.createElement(
                          D.a,
                          { color: 'secondary', variant: 'dot', invisible: P, className: B.link },
                          r.a.createElement(
                            w.a,
                            {
                              onClick: function (e) {
                                d(e.currentTarget);
                              },
                            },
                            'Notifications'
                          ),
                          r.a.createElement(
                            T.a,
                            {
                              id: F,
                              open: R,
                              anchorEl: p,
                              onClose: function () {
                                d(null);
                              },
                              anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                              transformOrigin: { vertical: 'top', horizontal: 'center' },
                            },
                            r.a.createElement(te, { notifications: O })
                          )
                        ),
                        r.a.createElement(
                          w.a,
                          { component: y.b, to: '/jobs', className: B.link },
                          'My Jobs'
                        ),
                        r.a.createElement(
                          w.a,
                          { component: y.b, to: '/requests', className: B.link },
                          'My Sitters'
                        ),
                        r.a.createElement(
                          w.a,
                          { component: y.b, to: '/payment', className: B.link },
                          'My Payment'
                        ),
                        r.a.createElement(
                          w.a,
                          { component: y.b, to: '/messages', className: B.link },
                          'Messages'
                        ),
                        r.a.createElement(k.a, {
                          alt: 'Remy Sharp',
                          src: s,
                          component: y.b,
                          to: '/profile',
                          className: B.avatar,
                        }),
                        r.a.createElement(
                          w.a,
                          {
                            variant: 'outlined',
                            color: 'primary',
                            component: y.b,
                            to: '/',
                            onClick: function (e) {
                              f.a
                                .post('/users/logout')
                                .then(function (e) {
                                  200 === e.status && (c(!1), C.push('/'), localStorage.clear());
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                            },
                            style: { marginLeft: '3%' },
                          },
                          'logout'
                        )
                      )
                    )
                  )
                )
              : r.a.createElement(
                  'div',
                  null,
                  r.a.createElement(N.a, null),
                  r.a.createElement(
                    j.a,
                    { position: 'static', color: 'default', elevation: 0, className: B.appBar },
                    r.a.createElement(
                      x.a,
                      { className: B.toolbar },
                      r.a.createElement('img', { src: '/images/logo.png', alt: '' }),
                      r.a.createElement(
                        S.a,
                        {
                          container: !0,
                          alignItems: 'center',
                          justify: 'flex-end',
                          direction: 'row',
                          spacing: 4,
                        },
                        r.a.createElement(
                          y.b,
                          {
                            href: '#',
                            color: '',
                            underline: 'always',
                            style: { marginRight: '35px', fontWeight: '700', color: '#ff0000' },
                          },
                          'BECOME A SITTER'
                        ),
                        r.a.createElement(U, null),
                        r.a.createElement(V, null)
                      )
                    )
                  )
                )
          );
        }),
        ce = t(93),
        ie = t.n(ce),
        oe = Object(_.a)(function (e) {
          return {
            menu: { marginTop: e.spacing(10), marginLeft: e.spacing(25) },
            icon: { width: e.spacing(4), height: e.spacing(4) },
            title: { fontSize: 60, fontWeight: 800 },
            text: { fontSize: 20, fontWeight: 800 },
            input: { width: e.spacing(22), marginLeft: e.spacing(1) },
            button: {
              width: e.spacing(28),
              height: e.spacing(7),
              marginTop: e.spacing(2),
              marginLeft: e.spacing(4),
            },
            img: { height: 844 },
          };
        });
      function se() {
        var e = oe(),
          a = ee()('1200', 'HH:mm').add(1, 'day'),
          t = Object(n.useState)(''),
          l = Object(v.a)(t, 2),
          c = (l[0], l[1]),
          i = Object(n.useState)(a.format('YYYY-MM-DDTHH:mm')),
          o = Object(v.a)(i, 2),
          s = o[0],
          m = o[1],
          u = Object(n.useState)(a.add(1, 'day').format('YYYY-MM-DDTHH:mm')),
          g = Object(v.a)(u, 2),
          p = g[0],
          d = g[1];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            S.a,
            { container: !0, spacing: 0, align: 'center', justify: 'center' },
            r.a.createElement(
              S.a,
              { item: !0, xs: 6, align: 'left' },
              r.a.createElement(
                'div',
                { className: e.menu },
                r.a.createElement(
                  P.a,
                  { variant: 'h1', align: 'left', className: e.title },
                  'Find the care',
                  r.a.createElement('br', null),
                  'your dog deservers'
                ),
                r.a.createElement(
                  S.a,
                  { style: { margin: '5%' } },
                  r.a.createElement(
                    P.a,
                    { variant: 'subtitle1', align: 'left', gutterBottom: !0, className: e.text },
                    'WHERE'
                  ),
                  r.a.createElement(ie.a, { className: e.icon }),
                  r.a.createElement(R.a, {
                    className: e.input,
                    id: 'standard-basic',
                    placeholder: 'location',
                    onChange: function (e) {
                      return c(e.target.value);
                    },
                  })
                ),
                r.a.createElement(
                  S.a,
                  { style: { margin: '5%' } },
                  r.a.createElement(
                    S.a,
                    { container: !0 },
                    r.a.createElement(
                      S.a,
                      null,
                      r.a.createElement(
                        P.a,
                        {
                          variant: 'subtitle1',
                          align: 'left',
                          gutterBottom: !0,
                          className: e.text,
                        },
                        'DROP IN'
                      ),
                      r.a.createElement(R.a, {
                        id: 'datetime-local',
                        type: 'datetime-local',
                        defaultValue: s,
                        className: e.datePicker,
                        onChange: function (e) {
                          return m(e.target.value);
                        },
                      })
                    ),
                    r.a.createElement(
                      S.a,
                      { style: { marginLeft: '5%' } },
                      r.a.createElement(
                        P.a,
                        {
                          variant: 'subtitle1',
                          align: 'left',
                          gutterBottom: !0,
                          className: e.text,
                        },
                        'DROP OFF'
                      ),
                      r.a.createElement(R.a, {
                        id: 'datetime-local',
                        type: 'datetime-local',
                        defaultValue: p,
                        className: e.datePicker,
                        onChange: function (e) {
                          return d(e.target.value);
                        },
                      })
                    )
                  )
                ),
                r.a.createElement(
                  w.a,
                  { variant: 'contained', size: 'large', color: 'primary', className: e.button },
                  'FIND MY DOG SITTER'
                )
              )
            ),
            r.a.createElement(
              S.a,
              { item: !0, xs: 6, className: e.img, align: 'right' },
              r.a.createElement('img', {
                alt: 'LovingSitters',
                src: '/images/landing.jpg',
                style: { width: '85%', height: '100%' },
              })
            )
          )
        );
      }
      var me = t(329),
        ue = t(330),
        ge = t(331),
        pe = t(332),
        de = t(108),
        fe = t.n(de),
        Ee = Object(_.a)(function (e) {
          return {
            search: { padding: e.spacing(4, 0, 4) },
            searchButtons: { marginTop: e.spacing(0) },
            card: { height: '100%', display: 'flex', flexDirection: 'column' },
            avatar: { width: 80, height: 80, marginTop: e.spacing(2), margin: 'auto' },
            cardContent: { flexGrow: 1 },
            footer: {
              marginTop: e.spacing(4),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          };
        });
      var he = function (e) {
          var a = Ee(),
            t = Object(n.useState)(),
            l = Object(v.a)(t, 2),
            c = l[0],
            i = l[1];
          return (
            Object(n.useEffect)(
              function () {
                f.a.get('/profile/list/'.concat(e.userID)).then(function (e) {
                  var a = e.data;
                  i(a);
                });
              },
              [e.userID]
            ),
            c
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(N.a, null),
                  r.a.createElement(
                    'div',
                    { className: a.search },
                    r.a.createElement(
                      me.a,
                      { maxWidth: 'sm' },
                      r.a.createElement(
                        P.a,
                        { component: 'h1', variant: 'h1', align: 'center', gutterBottom: !0 },
                        'Your search results'
                      ),
                      r.a.createElement(
                        'div',
                        { className: a.searchButtons },
                        r.a.createElement(
                          S.a,
                          { container: !0, spacing: 1, justify: 'center', alignItems: 'flex-end' },
                          r.a.createElement(S.a, { item: !0 }, r.a.createElement(ie.a, null)),
                          r.a.createElement(
                            S.a,
                            { item: !0 },
                            r.a.createElement(R.a, {
                              id: 'input-with-icon-grid',
                              label: 'Location',
                            })
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, style: { marginLeft: '3%' } },
                            r.a.createElement(fe.a, null)
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0 },
                            r.a.createElement(R.a, { id: 'input-with-icon-grid', label: 'DROP IN' })
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0 },
                            r.a.createElement(R.a, {
                              id: 'input-with-icon-grid',
                              label: 'DROP OFF',
                            })
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    'div',
                    { className: a.searchContent },
                    c.length > 0
                      ? r.a.createElement(
                          me.a,
                          { className: a.cardGrid, maxWidth: 'md' },
                          r.a.createElement(
                            S.a,
                            { container: !0, spacing: 4 },
                            c.map(function (t) {
                              return r.a.createElement(
                                S.a,
                                { item: !0, key: t._id, xs: 12, sm: 6, md: 4 },
                                r.a.createElement(
                                  ue.a,
                                  { className: a.card, elevation: 3 },
                                  r.a.createElement(k.a, {
                                    alt: '',
                                    src:
                                      'https://team-kiwi.s3.ca-central-1.amazonaws.com/' +
                                      t.profileImg,
                                    className: a.avatar,
                                  }),
                                  r.a.createElement(
                                    ge.a,
                                    { className: a.cardContent },
                                    r.a.createElement(
                                      P.a,
                                      {
                                        variant: 'h5',
                                        component: 'h2',
                                        align: 'center',
                                        gutterBottom: !0,
                                      },
                                      t.firstName,
                                      ' ',
                                      t.lastName
                                    ),
                                    r.a.createElement(P.a, { align: 'center' }, t.description)
                                  ),
                                  r.a.createElement(J.a, { light: !0 }),
                                  r.a.createElement(
                                    pe.a,
                                    null,
                                    r.a.createElement(
                                      w.a,
                                      {
                                        size: 'small',
                                        color: 'primary',
                                        component: y.b,
                                        to: {
                                          pathname: '/details',
                                          userID: e.userID,
                                          sitterID: t._id,
                                        },
                                      },
                                      'View Profile'
                                    )
                                  )
                                )
                              );
                            })
                          )
                        )
                      : r.a.createElement('div', null, 'No sitters matched')
                  ),
                  r.a.createElement(
                    'footer',
                    { className: a.footer },
                    c.length > 0 &&
                      r.a.createElement(w.a, { size: 'large', variant: 'outlined' }, 'Show more')
                  )
                )
              : r.a.createElement(
                  P.a,
                  {
                    component: 'h1',
                    variant: 'h1',
                    align: 'center',
                    className: a.search,
                    gutterBottom: !0,
                  },
                  'Loading...'
                )
          );
        },
        be = t(339),
        ve = t(73),
        ye = t(333),
        Oe = Object(_.a)(function (e) {
          return {
            root: { width: 340, height: 80 },
            header: { marginTop: e.spacing(0), height: 50, padding: e.spacing(1) },
            contents: { padding: e.spacing(0.5) },
            date: { float: 'left', marginLeft: e.spacing(0.5), marginTop: e.spacing(1) },
            settings: { float: 'right' },
            avatar: {
              float: 'left',
              width: e.spacing(6),
              height: e.spacing(6),
              marginLeft: e.spacing(1),
            },
            name: { float: 'left', marginLeft: e.spacing(1), padding: e.spacing(1.5) },
            status: {
              float: 'right',
              marginTop: e.spacing(1.5),
              marginRight: e.spacing(1.5),
              color: e.palette.text.secondary,
            },
          };
        });
      function Ne(e) {
        var a = Oe(),
          t = Object(n.useState)(),
          l = Object(v.a)(t, 2),
          c = l[0],
          i = l[1];
        Object(n.useEffect)(
          function () {
            i(e.userKey);
          },
          [e]
        );
        var o = e.user.firstName + ' ' + e.user.lastName,
          s = 'https://team-kiwi.s3.ca-central-1.amazonaws.com/' + e.user.userProfile[0].profileImg,
          m = function (a) {
            a.preventDefault(), e.onSubmit(c);
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'form',
            { onSubmit: m },
            r.a.createElement(
              ye.a,
              { className: a.root, onClick: m },
              r.a.createElement(
                ge.a,
                { className: a.contents },
                r.a.createElement(k.a, {
                  'aria-label': 'recipe',
                  className: a.avatar,
                  alt: '',
                  src: s,
                }),
                r.a.createElement(P.a, { variant: 'h6', className: a.name, gutterBottom: !0 }, o)
              )
            ),
            r.a.createElement(J.a, null)
          )
        );
      }
      var je = Object(_.a)(function (e) {
        return {
          list: { height: 800, overflow: 'auto' },
          header: { padding: e.spacing(3.5), height: 80 },
          titleTop: { marginTop: e.spacing(1), marginLeft: e.spacing(1) },
          messageRoot: { width: 900, height: 800 },
          messageGrid: { height: '80%', overflow: 'auto' },
          avatar: {
            width: e.spacing(8),
            height: e.spacing(8),
            marginLeft: e.spacing(2),
            marginTop: e.spacing(1),
          },
          name: { marginTop: e.spacing(3), marginLeft: e.spacing(3) },
          send: { maxWidth: 300, marginLeft: e.spacing(73) },
          receive: { maxWidth: 300, color: e.palette.primary, margin: e.spacing(1) },
          receiveBox: { backgroundColor: '#FFB6C1' },
          messageTxt: { variant: 'body', component: 'p' },
        };
      });
      var xe = function (e) {
          var a = je(),
            t = Object(n.useState)([]),
            l = Object(v.a)(t, 2),
            c = l[0],
            i = l[1],
            o = Object(n.useState)(null),
            s = Object(v.a)(o, 2),
            m = s[0],
            u = s[1],
            g = Object(n.useState)(),
            p = Object(v.a)(g, 2),
            d = p[0],
            E = p[1],
            h = Object(n.useState)(),
            b = Object(v.a)(h, 2);
          b[0],
            b[1],
            Object(n.useEffect)(
              function () {
                f.a.get('/users/all/'.concat(e.userID)).then(function (e) {
                  var a = e.data;
                  i(a);
                });
              },
              [e.userID]
            );
          var y = function (e) {
              u(e);
            },
            O = function () {
              var a = { partner: c[m]._id, me: e.userID };
              f.a.post('/message', a).then(function (e) {
                var a = e.data;
                console.log(a);
              });
            };
          return c
            ? r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  S.a,
                  { container: !0, spacing: 0, align: 'center', justify: 'center' },
                  r.a.createElement(
                    ve.a,
                    { elevation: 4, square: !0, className: a.list },
                    (function () {
                      var e = [];
                      return (
                        e.push(
                          r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              ge.a,
                              { className: a.header },
                              r.a.createElement(
                                P.a,
                                { variant: 'h2', align: 'left', style: { fontWeight: '550' } },
                                'InBox Messages'
                              )
                            ),
                            r.a.createElement(J.a, null)
                          )
                        ),
                        c.forEach(function (a, t) {
                          e.push(r.a.createElement(Ne, { user: a, userKey: t, onSubmit: y }));
                        }),
                        e
                      );
                    })()
                  ),
                  r.a.createElement(
                    ve.a,
                    { elevation: 4, square: !0, className: a.messageRoot },
                    (function () {
                      if (null !== m) {
                        var e = 'Replay to '.concat(c[m].firstName),
                          t =
                            'https://team-kiwi.s3.ca-central-1.amazonaws.com/' +
                            c[m].userProfile[0].profileImg;
                        return r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            S.a,
                            { container: !0, style: { height: '10%' } },
                            r.a.createElement(k.a, {
                              'aria-label': 'recipe',
                              className: a.avatar,
                              alt: '',
                              src: t,
                            }),
                            r.a.createElement(
                              P.a,
                              { variant: 'h1', align: 'left', className: a.name },
                              c[m].firstName,
                              ' ',
                              c[m].lastName
                            )
                          ),
                          r.a.createElement(J.a, null),
                          r.a.createElement(
                            S.a,
                            { container: !0, className: a.messageGrid },
                            r.a.createElement(
                              be.a,
                              { display: 'flex', flexDirection: 'column', width: '900px' },
                              void 0
                            )
                          ),
                          r.a.createElement(J.a, null),
                          r.a.createElement(
                            S.a,
                            { container: !0, style: { height: '10%' } },
                            r.a.createElement(
                              S.a,
                              { item: !0, xs: 9 },
                              r.a.createElement(R.a, {
                                id: 'standard-basic',
                                placeholder: e,
                                fullWidth: !0,
                                value: d,
                                style: { padding: '3%' },
                                onChange: function (e) {
                                  return E(e.target.value);
                                },
                              })
                            ),
                            r.a.createElement(
                              S.a,
                              { item: !0, xs: 3 },
                              r.a.createElement(
                                w.a,
                                {
                                  variant: 'contained',
                                  color: 'primary',
                                  style: { width: '150px', height: '45px', marginTop: '5.5%' },
                                  onClick: O,
                                },
                                'SEND'
                              )
                            )
                          )
                        );
                      }
                      return r.a.createElement(
                        P.a,
                        { variant: 'h6', align: 'left', className: a.titleTop },
                        'SELECT USER TO MESSAGE'
                      );
                    })()
                  )
                )
              )
            : r.a.createElement(
                P.a,
                {
                  component: 'h1',
                  variant: 'h1',
                  align: 'center',
                  className: a.search,
                  gutterBottom: !0,
                },
                'Loading...'
              );
        },
        Se = t(334),
        we = t(335),
        De = t(156),
        Te = t.n(De),
        ke = t(343),
        Ie = t(178),
        Ce = t(267),
        Me = t(177);
      function Ye(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 7, variant: 'filled' }, e));
      }
      var Pe = Object(_.a)(function (e) {
        return {
          root: { flexWrap: 'wrap', width: e.spacing(100) },
          topBackground: {
            minHeight: 'calc(50vh - 66px)',
            background: 'url(/images/detail_background.jpg) center/cover no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          about: { margin: e.spacing(5) },
          requestForm: { flexWrap: 'wrap', width: 345, height: 400, marginLeft: e.spacing(10) },
          subPhotos: {
            margin: e.spacing(5),
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
          },
          datePicker: { marginRight: e.spacing(1), width: 200, float: 'left' },
          gridList: { flexWrap: 'nowrap', transform: 'translateZ(0)' },
          photo: { margin: e.spacing(5), width: e.spacing(20), height: e.spacing(20) },
          modal: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          paper: {
            backgroundColor: e.palette.background.paper,
            border: '2px solid #000',
            boxShadow: e.shadows[5],
            padding: e.spacing(2, 4, 3),
          },
          confirmForm: { alignItems: 'center', width: 400, height: 500 },
        };
      });
      var Le = function (e) {
          var a = ee()('1200', 'HH:mm').add(1, 'day'),
            t = Pe(),
            l = Object(n.useState)(),
            c = Object(v.a)(l, 2),
            i = c[0],
            o = c[1],
            s = Object(n.useState)(a.format('YYYY-MM-DDTHH:mm')),
            m = Object(v.a)(s, 2),
            u = m[0],
            g = m[1],
            p = Object(n.useState)(a.add(1, 'day').format('YYYY-MM-DDTHH:mm')),
            d = Object(v.a)(p, 2),
            E = d[0],
            h = d[1],
            b = Object(n.useState)(!1),
            y = Object(v.a)(b, 2),
            O = y[0],
            N = y[1],
            j = Object(n.useState)(!1),
            x = Object(v.a)(j, 2),
            D = x[0],
            T = x[1],
            I = Object(n.useState)(!1),
            C = Object(v.a)(I, 2),
            M = C[0],
            Y = C[1],
            L = Object(n.useState)(null),
            B = Object(v.a)(L, 2),
            F = B[0],
            W = B[1],
            A = Object(n.useState)(null),
            q = Object(v.a)(A, 2),
            z = q[0],
            U = q[1],
            G = Object(n.useState)(0),
            V = Object(v.a)(G, 2),
            _ = V[0],
            K = V[1],
            Q = function () {
              N(!1);
            },
            J = function (e, a) {
              'clickaway' !== a && (T(!1), Y(!1));
            };
          return (
            Object(n.useEffect)(
              function () {
                f.a.get('/profile/'.concat(e.location.sitterID)).then(function (a) {
                  var t = a.data;
                  console.log(e.location.sitterID),
                    o(t),
                    void 0 !== t.profileImg
                      ? W(
                          ''.concat(
                            'https://team-kiwi.s3.ca-central-1.amazonaws.com/' + t.profileImg
                          )
                        )
                      : W('N/A'),
                    void 0 !== t.albumImgs ? U(t.albumImgs) : U([]);
                });
              },
              [e.location.sitterID]
            ),
            i && z
              ? r.a.createElement(
                  S.a,
                  {
                    container: !0,
                    spacing: 0,
                    align: 'center',
                    justify: 'center',
                    style: { marginTop: '5%' },
                  },
                  r.a.createElement(
                    S.a,
                    { maxwidth: 'md', className: t.root },
                    r.a.createElement(
                      ve.a,
                      { elevation: 5 },
                      r.a.createElement(be.a, { className: t.topBackground }),
                      r.a.createElement(
                        S.a,
                        { style: { marginTop: '-120px' } },
                        r.a.createElement(k.a, { alt: 'Remy Sharp', src: F, className: t.photo }),
                        r.a.createElement(
                          P.a,
                          { variant: 'h1', align: 'center' },
                          i.firstName,
                          ' ',
                          i.lastName
                        ),
                        r.a.createElement(
                          P.a,
                          {
                            variant: 'h6',
                            align: 'center',
                            style: { color: 'grey' },
                            gutterBottom: !0,
                          },
                          'Loving pet sitter'
                        ),
                        r.a.createElement(
                          S.a,
                          {
                            container: !0,
                            spacing: 0,
                            align: 'center',
                            justify: 'center',
                            style: { marginTop: '15px' },
                          },
                          r.a.createElement(Te.a, { style: { color: '#f44336' } }),
                          r.a.createElement(
                            P.a,
                            { variant: 'subtitle1', style: { color: 'grey', marginLeft: '7px' } },
                            i.address
                          )
                        )
                      ),
                      r.a.createElement(
                        S.a,
                        { className: t.about },
                        r.a.createElement(
                          P.a,
                          { variant: 'h1', align: 'left', gutterBottom: !0 },
                          'About me'
                        ),
                        r.a.createElement(
                          P.a,
                          { variant: 'body1', align: 'left', gutterBottom: !0 },
                          i.description
                        )
                      ),
                      r.a.createElement(
                        S.a,
                        { className: t.subPhotos },
                        r.a.createElement(
                          Se.a,
                          { className: t.gridList, cols: 4, spacing: 10 },
                          z.map(function (e) {
                            return r.a.createElement(
                              we.a,
                              { key: e, style: { marginBottom: '25px' } },
                              r.a.createElement('img', {
                                src: ''.concat(
                                  'https://team-kiwi.s3.ca-central-1.amazonaws.com/' + e
                                ),
                                alt: 'albumImg',
                              })
                            );
                          })
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    ue.a,
                    { className: t.requestForm, elevation: 5 },
                    r.a.createElement(
                      S.a,
                      null,
                      r.a.createElement(
                        P.a,
                        {
                          variant: 'h1',
                          align: 'center',
                          gutterBottom: !0,
                          style: { marginTop: '35px' },
                        },
                        '$',
                        14,
                        '/hr'
                      ),
                      r.a.createElement(ke.a, {
                        name: 'half-rating-read',
                        defaultValue: 3.5,
                        precision: 0.5,
                        readOnly: !0,
                      })
                    ),
                    r.a.createElement(
                      S.a,
                      { style: { margin: '35px' } },
                      r.a.createElement(
                        P.a,
                        {
                          variant: 'subtitle1',
                          align: 'left',
                          gutterBottom: !0,
                          style: { fontWeight: '800' },
                        },
                        'DROP IN'
                      ),
                      r.a.createElement(R.a, {
                        id: 'datetime-local',
                        type: 'datetime-local',
                        defaultValue: u,
                        className: t.datePicker,
                        InputLabelProps: { shrink: !0 },
                        onChange: function (e) {
                          return g(e.target.value);
                        },
                      })
                    ),
                    r.a.createElement(
                      S.a,
                      { style: { margin: '35px', marginTop: '65px' } },
                      r.a.createElement(
                        P.a,
                        {
                          variant: 'subtitle1',
                          align: 'left',
                          gutterBottom: !0,
                          style: { fontWeight: '800' },
                        },
                        'DROP OFF'
                      ),
                      r.a.createElement(R.a, {
                        id: 'datetime-local',
                        type: 'datetime-local',
                        defaultValue: E,
                        className: t.datePicker,
                        InputLabelProps: { shrink: !0 },
                        onChange: function (e) {
                          return h(e.target.value);
                        },
                      })
                    ),
                    r.a.createElement(
                      w.a,
                      {
                        variant: 'contained',
                        size: 'large',
                        color: 'primary',
                        style: { marginTop: '45px' },
                        onClick: function () {
                          if (u < E) {
                            var e = 14 * ee.a.duration(ee()(E).diff(ee()(u))).asHours();
                            K(e.toFixed(2)), N(!0);
                          } else Y(!0);
                        },
                      },
                      'SEND REQUEST'
                    ),
                    r.a.createElement(
                      Ie.a,
                      {
                        'aria-labelledby': 'transition-modal-title',
                        'aria-describedby': 'transition-modal-description',
                        className: t.modal,
                        open: O,
                        onClose: Q,
                        closeAfterTransition: !0,
                        BackdropComponent: Ce.a,
                        BackdropProps: { timeout: 500 },
                      },
                      r.a.createElement(
                        'div',
                        { style: { outline: 0 } },
                        r.a.createElement(
                          Me.a,
                          { in: O },
                          r.a.createElement(
                            ue.a,
                            { className: t.requestForm, elevation: 5, align: 'center' },
                            r.a.createElement(
                              S.a,
                              null,
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h1',
                                  align: 'center',
                                  gutterBottom: !0,
                                  style: { marginTop: '35px' },
                                },
                                'Confirm Request'
                              ),
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h2',
                                  align: 'center',
                                  gutterBottom: !0,
                                  style: { marginTop: '20px' },
                                },
                                'Total Cost : $',
                                _
                              )
                            ),
                            r.a.createElement(
                              S.a,
                              { style: { margin: '35px' } },
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'subtitle1',
                                  align: 'left',
                                  gutterBottom: !0,
                                  style: { fontWeight: '800' },
                                },
                                'DROP IN'
                              ),
                              r.a.createElement(R.a, {
                                disabled: !0,
                                id: 'datetime-local',
                                type: 'datetime-local',
                                defaultValue: u,
                                className: t.datePicker,
                                InputLabelProps: { shrink: !0 },
                              })
                            ),
                            r.a.createElement(
                              S.a,
                              { style: { margin: '35px', marginTop: '65px' } },
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'subtitle1',
                                  align: 'left',
                                  gutterBottom: !0,
                                  style: { fontWeight: '800' },
                                },
                                'DROP OFF'
                              ),
                              r.a.createElement(R.a, {
                                disabled: !0,
                                id: 'datetime-local',
                                type: 'datetime-local',
                                defaultValue: E,
                                className: t.datePicker,
                                InputLabelProps: { shrink: !0 },
                              })
                            ),
                            r.a.createElement(
                              w.a,
                              {
                                variant: 'contained',
                                size: 'large',
                                color: 'primary',
                                style: { marginTop: '45px' },
                                onClick: function () {
                                  var a = {
                                    user_id: e.location.userID,
                                    sitter_id: e.location.sitterID,
                                    start: u,
                                    end: E,
                                    cost: _,
                                  };
                                  f.a
                                    .post('/request/add', a)
                                    .then(function (e) {
                                      e.data.error ||
                                        (re()('http://localhost:4000/request').emit(
                                          'addRequestNotify',
                                          e
                                        ),
                                        Q(),
                                        T(!0));
                                    })
                                    .catch(function (e) {
                                      console.log('error: ', e);
                                    });
                                },
                              },
                              'CONFIRM REQUEST'
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      H.a,
                      { open: D, autoHideDuration: 1500, onClose: J },
                      r.a.createElement(
                        Ye,
                        { onClose: J, severity: 'success' },
                        'Requested successfully!'
                      )
                    ),
                    r.a.createElement(
                      H.a,
                      { open: M, autoHideDuration: 2e3, onClose: J },
                      r.a.createElement(
                        Ye,
                        { onClose: J, severity: 'error' },
                        'Please check request dates and time.'
                      )
                    )
                  )
                )
              : r.a.createElement(
                  P.a,
                  {
                    component: 'h1',
                    variant: 'h1',
                    align: 'center',
                    className: t.search,
                    gutterBottom: !0,
                  },
                  'Loading...'
                )
          );
        },
        Be = Object(_.a)(function (e) {
          return {
            root: { width: 360, height: 125, marginTop: e.spacing(1) },
            header: { marginTop: e.spacing(0), height: 50, padding: e.spacing(1) },
            contents: { height: 75, padding: e.spacing(0.5) },
            date: { float: 'left', marginLeft: e.spacing(0.5), marginTop: e.spacing(1) },
            avatar: {
              float: 'left',
              width: e.spacing(6),
              height: e.spacing(6),
              marginLeft: e.spacing(1),
            },
            name: { float: 'left', marginLeft: e.spacing(1), padding: e.spacing(1.5) },
          };
        });
      function Re(e) {
        var a = Be(),
          t = Object(n.useState)(),
          l = Object(v.a)(t, 2),
          c = l[0],
          i = l[1],
          o = Object(n.useState)(),
          s = Object(v.a)(o, 2),
          m = s[0],
          u = s[1],
          g = Object(n.useState)(),
          p = Object(v.a)(g, 2),
          d = p[0],
          f = p[1];
        Object(n.useEffect)(
          function () {
            i(ee()(e.booking.start).format('YYYY-MM-DDTHH:mm')),
              u(ee()(e.booking.end).format('YYYY-MM-DDTHH:mm')),
              f(e.payKey);
          },
          [e]
        );
        var E = e.booking.sitterProfile[0].firstName + ' ' + e.booking.sitterProfile[0].lastName,
          h =
            'https://team-kiwi.s3.ca-central-1.amazonaws.com/' +
            e.booking.sitterProfile[0].profileImg,
          b = function (a) {
            a.preventDefault(), e.onSubmit(d);
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'form',
            { onSubmit: b },
            r.a.createElement(
              ue.a,
              { className: a.root, variant: 'outlined' },
              r.a.createElement(
                ye.a,
                { className: a.button, onClick: b },
                r.a.createElement(
                  ge.a,
                  { className: a.header },
                  r.a.createElement(
                    P.a,
                    { variant: 'body', className: a.date },
                    (function () {
                      var e = ee()(c),
                        a = ee()(m);
                      return (
                        e.format('D MMM YYYY, hA-') +
                        (e.year() === a.year()
                          ? e.month() === a.month() && e.day() === a.day()
                            ? a.format('hA')
                            : a.format('D MMM, hA')
                          : a.format('D MMM YYYY, hA'))
                      );
                    })()
                  )
                ),
                r.a.createElement(
                  ge.a,
                  { className: a.contents },
                  r.a.createElement(k.a, {
                    'aria-label': 'recipe',
                    className: a.avatar,
                    alt: '',
                    src: h,
                  }),
                  r.a.createElement(P.a, { variant: 'h6', className: a.name, gutterBottom: !0 }, E)
                )
              )
            )
          )
        );
      }
      var Fe = Object(_.a)(function (e) {
        return {
          root: { width: 360, height: 125, marginTop: e.spacing(1) },
          contents: { align: 'center', marginTop: e.spacing(4) },
        };
      });
      function We(e) {
        var a = Fe();
        return r.a.createElement(
          ue.a,
          { className: a.root, variant: 'outlined' },
          r.a.createElement(
            ge.a,
            { className: a.contents },
            r.a.createElement(
              P.a,
              { variant: 'h6', gutterBottom: !0 },
              e.isPaid ? 'No requests paid right now.' : 'No requests to pay right now.'
            )
          )
        );
      }
      var Ae = t(61),
        He = t.n(Ae),
        qe = t(94),
        ze = t(157),
        Ue = t(62),
        Ge = Object(_.a)(function (e) {
          return {
            buttons: {
              marginTop: e.spacing(4),
              '& > *': { width: 140, height: 50, margin: e.spacing(3) },
            },
          };
        }),
        Ve = function (e) {
          var a = e.success,
            t = e.props,
            n = Object(Ue.useStripe)(),
            l = Object(Ue.useElements)(),
            c = Ge(),
            i = (function () {
              var e = Object(qe.a)(
                He.a.mark(function e(r) {
                  var c, i, o, s, m;
                  return He.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              r.preventDefault(),
                              (e.next = 3),
                              n.createPaymentMethod({
                                type: 'card',
                                card: l.getElement(Ue.CardElement),
                              })
                            );
                          case 3:
                            if (((c = e.sent), (i = c.error), (o = c.paymentMethod), i)) {
                              e.next = 20;
                              break;
                            }
                            return (
                              (s = o.id),
                              (e.prev = 8),
                              (e.next = 11),
                              f.a.post('/payment/charge', {
                                id: s,
                                request_id: t.requestInfo._id,
                                amount: t.requestInfo.cost,
                              })
                            );
                          case 11:
                            (m = e.sent), m.data, a(), t.onSubmit(!0), (e.next = 20);
                            break;
                          case 17:
                            (e.prev = 17), (e.t0 = e.catch(8)), console.log(i);
                          case 20:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[8, 17]]
                  );
                })
              );
              return function (a) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            'form',
            { onSubmit: i, style: { maxWidth: '400px', margin: '0 auto' } },
            r.a.createElement(
              P.a,
              { variant: 'h5', style: { marginBottom: '6%' }, gutterBottom: !0 },
              'Service Price: $',
              t.requestInfo.cost
            ),
            r.a.createElement(Ue.CardElement, null),
            r.a.createElement(
              'div',
              { className: c.buttons },
              r.a.createElement(
                w.a,
                {
                  variant: 'outlined',
                  size: 'large',
                  color: 'secondary',
                  type: 'submit',
                  disabled: !n,
                },
                'Pay with credit card'
              )
            )
          );
        },
        _e = Object(ze.a)(
          'pk_test_51H1zwdKW7zq8n6VY61pm0OU1hANRfxrspepQqB8vyALzuWLPFzE0fOuuLZfk4H0qsW8NL9PbcEUzy8d2ooPF2pOa001lqwH7MO'
        );
      function Ke(e) {
        var a = r.a.useState(''),
          t = Object(v.a)(a, 2),
          n = t[0],
          l = t[1];
        return 'success' === n
          ? r.a.createElement('div', null, 'Payment completed!')
          : r.a.createElement(
              Ue.Elements,
              { stripe: _e },
              r.a.createElement(Ve, {
                success: function () {
                  l('success');
                },
                props: e,
              })
            );
      }
      function Qe(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 7, variant: 'filled' }, e));
      }
      var Je = Object(_.a)(function (e) {
        return {
          root: { flexWrap: 'wrap', width: e.spacing(50) },
          list: { width: 400, height: 600, overflow: 'auto' },
          contents: { padding: e.spacing(1) },
          titleTop: { marginTop: e.spacing(1), marginLeft: e.spacing(1) },
          title: { marginTop: e.spacing(2), marginLeft: e.spacing(1) },
          requestDetail: {
            flexWrap: 'wrap',
            width: 700,
            height: 600,
            marginLeft: e.spacing(5),
            padding: e.spacing(1),
          },
          avatar: { width: e.spacing(13), height: e.spacing(13), marginLeft: e.spacing(1) },
          name: { marginTop: e.spacing(3), marginLeft: e.spacing(3) },
          buttons: {
            marginTop: e.spacing(2),
            '& > *': { width: 140, height: 50, margin: e.spacing(3) },
          },
          dialog: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          paymentForm: { flexWrap: 'wrap', width: 450, height: 280 },
        };
      });
      var $e = function (e) {
          var a = Je(),
            t = Object(n.useState)([]),
            l = Object(v.a)(t, 2),
            c = l[0],
            i = l[1],
            o = Object(n.useState)(null),
            s = Object(v.a)(o, 2),
            m = s[0],
            u = s[1],
            g = Object(n.useState)(!1),
            p = Object(v.a)(g, 2),
            d = p[0],
            E = p[1],
            h = Object(n.useState)(!1),
            b = Object(v.a)(h, 2),
            y = b[0],
            O = b[1],
            N = Object(n.useState)(!1),
            j = Object(v.a)(N, 2),
            x = j[0],
            D = j[1],
            T = r.a.useState(2.5),
            I = Object(v.a)(T, 2),
            C = I[0],
            Y = I[1],
            L = r.a.useState(-1),
            B = Object(v.a)(L, 2),
            R = B[0],
            F = B[1];
          Object(n.useEffect)(
            function () {
              f.a.get('/request/accepted/'.concat(e.userID)).then(function (e) {
                var a = e.data;
                i(a);
              });
            },
            [e.userID]
          );
          var W = function (e) {
              u(e);
            },
            A = function (e) {
              e ? ((c[m].paid = !0), O(!0)) : D(!0), z();
            },
            q = function () {
              E(!0);
            },
            z = function () {
              E(!1);
            },
            U = function (e, a) {
              if ('clickaway' === a) return O(!1), void D(!1);
            },
            G = {
              0.5: 'Useless',
              1: 'Useless+',
              1.5: 'Poor',
              2: 'Poor+',
              2.5: 'Ok',
              3: 'Ok+',
              3.5: 'Good',
              4: 'Good+',
              4.5: 'Excellent',
              5: 'Excellent+',
            };
          return c
            ? r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  S.a,
                  {
                    container: !0,
                    spacing: 0,
                    align: 'center',
                    justify: 'center',
                    style: { marginTop: '1%' },
                  },
                  r.a.createElement(
                    S.a,
                    { maxwidth: 'md', className: a.root },
                    r.a.createElement(
                      ue.a,
                      { className: a.list },
                      r.a.createElement(
                        ge.a,
                        { className: a.contents },
                        (function () {
                          var e = [],
                            t = [];
                          return (
                            e.push(
                              r.a.createElement(
                                P.a,
                                { variant: 'h6', align: 'left', className: a.titleTop },
                                'UNPAID REQUESTS:'
                              )
                            ),
                            t.push(
                              r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(J.a, { style: { marginTop: '24px' } }),
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h6', align: 'left', className: a.title },
                                  'PAID REQUESTS:'
                                )
                              )
                            ),
                            c.forEach(function (a, n) {
                              !1 === a.paid
                                ? e.push(
                                    r.a.createElement(Re, { booking: a, payKey: n, onSubmit: W })
                                  )
                                : t.push(
                                    r.a.createElement(Re, { booking: a, payKey: n, onSubmit: W })
                                  );
                            }),
                            1 === e.length && e.push(r.a.createElement(We, { isPaid: !1 })),
                            1 === t.length && t.push(r.a.createElement(We, { isPaid: !0 })),
                            e.concat(t)
                          );
                        })()
                      )
                    )
                  ),
                  r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      S.a,
                      { container: !0, spacing: 0, align: 'center', justify: 'center' },
                      r.a.createElement(
                        ve.a,
                        { className: a.requestDetail },
                        (function () {
                          if (null !== m) {
                            var e =
                              'https://team-kiwi.s3.ca-central-1.amazonaws.com/' +
                              c[m].sitterProfile[0].profileImg;
                            return r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                P.a,
                                { variant: 'h6', align: 'left', className: a.titleTop },
                                'REQUEST DETAIL:'
                              ),
                              r.a.createElement(
                                S.a,
                                { container: !0, style: { marginTop: '3%' } },
                                r.a.createElement(k.a, {
                                  'aria-label': 'recipe',
                                  className: a.avatar,
                                  alt: '',
                                  src: e,
                                }),
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h1', align: 'left', className: a.name },
                                  c[m].sitterProfile[0].firstName,
                                  ' ',
                                  c[m].sitterProfile[0].lastName
                                )
                              ),
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h6',
                                  align: 'left',
                                  className: a.titleTop,
                                  style: { marginTop: '4%' },
                                },
                                'SITTNG SCHEDULE:'
                              ),
                              r.a.createElement(
                                S.a,
                                { container: !0 },
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h5', className: a.titleTop },
                                  ee()(c[m].start).format('D MMM YYYY, hh:mmA'),
                                  ' -',
                                  ' ',
                                  ee()(c[m].end).format('D MMM YYYY, hh:mmA')
                                )
                              ),
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h6',
                                  align: 'left',
                                  className: a.titleTop,
                                  style: { marginTop: '4%' },
                                },
                                'SITTNG COST:'
                              ),
                              r.a.createElement(
                                S.a,
                                { container: !0 },
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h5', className: a.titleTop },
                                  '$',
                                  c[m].cost
                                )
                              ),
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h6',
                                  align: 'left',
                                  className: a.titleTop,
                                  style: { marginTop: '4%' },
                                },
                                'RATE THIS SITTER:'
                              ),
                              r.a.createElement(
                                S.a,
                                { container: !0 },
                                r.a.createElement(ke.a, {
                                  name: 'hover-feedback',
                                  size: 'large',
                                  value: C,
                                  precision: 0.5,
                                  onChange: function (e, a) {
                                    Y(a);
                                  },
                                  onChangeActive: function (e, a) {
                                    F(a);
                                  },
                                  disabled: !0 === c[m].paid,
                                  style: { marginLeft: '1%' },
                                }),
                                null !== C &&
                                  r.a.createElement(
                                    P.a,
                                    { variant: 'h6', style: { marginLeft: '1.5%' } },
                                    G[-1 !== R ? R : C]
                                  )
                              ),
                              r.a.createElement(
                                'div',
                                { className: a.buttons },
                                c[m].paid
                                  ? r.a.createElement(
                                      w.a,
                                      { disabled: !0, variant: 'outlined', size: 'large' },
                                      'Request Paid'
                                    )
                                  : r.a.createElement(
                                      w.a,
                                      {
                                        variant: 'outlined',
                                        size: 'large',
                                        color: 'secondary',
                                        onClick: q,
                                      },
                                      'Proceed Payment'
                                    )
                              ),
                              r.a.createElement(
                                M.a,
                                {
                                  className: a.dialog,
                                  open: d,
                                  onClose: z,
                                  closeAfterTransition: !0,
                                  BackdropComponent: Ce.a,
                                  BackdropProps: { timeout: 500 },
                                },
                                r.a.createElement(
                                  'div',
                                  { style: { outline: 0 } },
                                  r.a.createElement(
                                    Me.a,
                                    { in: d },
                                    r.a.createElement(
                                      ue.a,
                                      { className: a.paymentForm, elevation: 5, align: 'center' },
                                      r.a.createElement(
                                        S.a,
                                        null,
                                        r.a.createElement(
                                          P.a,
                                          {
                                            variant: 'h2',
                                            align: 'center',
                                            gutterBottom: !0,
                                            style: { marginTop: '25px', fontWeight: '800' },
                                          },
                                          'PAYMENT DETAIL'
                                        )
                                      ),
                                      r.a.createElement(
                                        S.a,
                                        { style: { margin: '5%' } },
                                        r.a.createElement(Ke, { requestInfo: c[m], onSubmit: A })
                                      )
                                    )
                                  )
                                )
                              )
                            );
                          }
                          return r.a.createElement(
                            P.a,
                            { variant: 'h6', align: 'left', className: a.titleTop },
                            'SELECT YOUR REQUEST TO PAY'
                          );
                        })()
                      )
                    )
                  )
                ),
                r.a.createElement(
                  H.a,
                  { open: y, autoHideDuration: 1500, onClose: U },
                  r.a.createElement(
                    Qe,
                    { onClose: U, severity: 'success' },
                    'Thank you for your using our service!'
                  )
                ),
                r.a.createElement(
                  H.a,
                  { open: x, autoHideDuration: 2e3, onClose: U },
                  r.a.createElement(
                    Qe,
                    { onClose: U, severity: 'error' },
                    'Something went wrong.. :('
                  )
                )
              )
            : r.a.createElement(
                P.a,
                {
                  component: 'h1',
                  variant: 'h1',
                  align: 'center',
                  className: a.search,
                  gutterBottom: !0,
                },
                'Loading...'
              );
        },
        Ze = t(336),
        Xe = t(313),
        ea = t(340),
        aa = t(158),
        ta = t.n(aa),
        na = t(159),
        ra = t.n(na);
      function la(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 6, variant: 'filled' }, e));
      }
      var ca = Object(_.a)(function (e) {
        return {
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': { width: e.spacing(100), height: e.spacing(130) },
          },
          grid: { flexGrow: 1, padding: e.spacing(5) },
          label: { padding: e.spacing(2) },
          box: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
          saveBtn: {
            margin: e.spacing(2),
            padding: e.spacing(2),
            paddingLeft: e.spacing(5),
            paddingRight: e.spacing(5),
          },
          button: { marginTop: '50px' },
          errMsg: { width: '100%' },
        };
      });
      var ia = function (e) {
          var a = Object(n.useState)(''),
            t = Object(v.a)(a, 2),
            l = t[0],
            c = t[1],
            i = Object(n.useState)(''),
            o = Object(v.a)(i, 2),
            s = o[0],
            m = o[1],
            u = Object(n.useState)(''),
            g = Object(v.a)(u, 2),
            p = g[0],
            d = g[1],
            E = Object(n.useState)(''),
            h = Object(v.a)(E, 2),
            b = h[0],
            y = h[1],
            O = Object(n.useState)(''),
            N = Object(v.a)(O, 2),
            j = N[0],
            x = N[1],
            D = Object(n.useState)(''),
            T = Object(v.a)(D, 2),
            k = T[0],
            I = T[1],
            C = Object(n.useState)(''),
            M = Object(v.a)(C, 2),
            Y = M[0],
            L = M[1],
            B = Object(n.useState)(''),
            F = Object(v.a)(B, 2),
            W = F[0],
            A = F[1],
            q = Object(n.useState)(!1),
            z = Object(v.a)(q, 2),
            U = z[0],
            G = z[1],
            V = Object(n.useState)(!1),
            _ = Object(v.a)(V, 2),
            K = _[0],
            Q = _[1],
            J = Object(n.useState)(''),
            $ = Object(v.a)(J, 2),
            Z = $[0],
            X = $[1],
            ee = Object(n.useState)(''),
            ae = Object(v.a)(ee, 2),
            te = ae[0],
            ne = ae[1],
            re = Object(n.useState)(''),
            le = Object(v.a)(re, 2),
            ce = le[0],
            ie = le[1];
          Object(n.useEffect)(
            function () {
              f.a.get('/profile/ref/'.concat(e.userID)).then(function (e) {
                var a = e.data;
                c(a.firstName),
                  m(a.lastName),
                  d(a.email),
                  y(a.gender),
                  x(ta.a.utc(a.birthDate).format('YYYY-MM-DD')),
                  I(a.phoneNumber),
                  L(a.address),
                  A(a.description),
                  G(!0);
              });
            },
            [e.userID]
          );
          var oe = function (a) {
              if (
                (a.preventDefault(),
                (function () {
                  var e = '',
                    a = '',
                    t = '';
                  return (
                    l || (e = 'First Name cannot be empty'),
                    s || (a = 'Last Name connot be empty'),
                    k || (t = 'Phone number cannot empty'),
                    !(e || a || t) || (ne(e), ie(a), X(t), !1)
                  );
                })())
              ) {
                ne(''), ie(''), X('');
                var t = {
                  userId: e.userID,
                  firstName: l,
                  lastName: s,
                  gender: b,
                  birthDate: j,
                  phoneNumber: k.replace(/ /g, ''),
                  address: Y,
                  description: W,
                };
                f.a
                  .put('/profile/'.concat(e.userID), t)
                  .then(function (e) {
                    e.data.error || se();
                  })
                  .catch(function (e) {
                    console.log('error: ', e);
                  });
              }
            },
            se = function () {
              Q(!0);
            },
            ue = function (e, a) {
              'clickaway' !== a && Q(!1);
            },
            ge = ca();
          return U
            ? r.a.createElement(
                n.Fragment,
                null,
                r.a.createElement(
                  me.a,
                  { maxwidth: 'lg', className: ge.root },
                  r.a.createElement(
                    ve.a,
                    { elevation: 3 },
                    r.a.createElement(
                      'form',
                      { onSubmit: oe },
                      r.a.createElement(
                        S.a,
                        { container: !0, spacing: 3, className: ge.grid },
                        r.a.createElement(
                          S.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(
                            P.a,
                            { variant: 'h1', align: 'center', gutterBottom: !0 },
                            'Edit Profile'
                          )
                        ),
                        r.a.createElement(
                          S.a,
                          { container: !0, item: !0, xs: 12 },
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 3, className: ge.label },
                            r.a.createElement(
                              P.a,
                              { variant: 'h6', align: 'right', gutterBottom: !0 },
                              'FIRST NAME'
                            )
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 8 },
                            r.a.createElement(R.a, {
                              id: 'firstName',
                              style: { margin: 0 },
                              placeholder: 'First Name',
                              fullWidth: !0,
                              margin: 'normal',
                              variant: 'outlined',
                              defaultValue: l,
                              type: 'text',
                              onChange: function (e) {
                                return c(e.target.value);
                              },
                            })
                          ),
                          r.a.createElement(
                            'div',
                            { className: ge.errMsg },
                            te.length > 0 ? r.a.createElement(la, { severity: 'error' }, te) : ''
                          )
                        ),
                        r.a.createElement(
                          S.a,
                          { container: !0, item: !0, xs: 12 },
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 3, className: ge.label },
                            r.a.createElement(
                              P.a,
                              { variant: 'h6', align: 'right', gutterBottom: !0 },
                              'LAST NAME'
                            )
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 8 },
                            r.a.createElement(R.a, {
                              id: 'lastName',
                              style: { margin: 0 },
                              placeholder: 'Last Name',
                              fullWidth: !0,
                              margin: 'normal',
                              variant: 'outlined',
                              defaultValue: s,
                              onChange: function (e) {
                                return m(e.target.value);
                              },
                            })
                          ),
                          r.a.createElement(
                            'div',
                            { className: ge.errMsg },
                            ce.length > 0 ? r.a.createElement(la, { severity: 'error' }, ce) : ''
                          )
                        ),
                        r.a.createElement(
                          S.a,
                          { container: !0, item: !0, xs: 12 },
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 3, className: ge.label },
                            r.a.createElement(
                              P.a,
                              { variant: 'h6', align: 'right', gutterBottom: !0 },
                              'GENDER'
                            )
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 4 },
                            r.a.createElement(
                              Xe.a,
                              { variant: 'outlined', className: ge.formControl, fullWidth: !0 },
                              r.a.createElement(
                                ea.a,
                                {
                                  labelId: 'demo-simple-select-outlined-label',
                                  id: 'demo-simple-select-outlined',
                                  value: b || 'Other',
                                  onChange: function (e) {
                                    return y(e.target.value);
                                  },
                                },
                                r.a.createElement(Ze.a, { value: 'Male' }, 'Male'),
                                r.a.createElement(Ze.a, { value: 'Female' }, 'Female'),
                                r.a.createElement(Ze.a, { value: 'Other' }, 'Other')
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          S.a,
                          { container: !0, item: !0, xs: 12 },
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 3, className: ge.label },
                            r.a.createElement(
                              P.a,
                              { variant: 'h6', align: 'right', gutterBottom: !0 },
                              'BIRTH DATE'
                            )
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 8, className: ge.label },
                            r.a.createElement(R.a, {
                              id: 'date',
                              type: 'date',
                              className: ge.textField,
                              InputLabelProps: { shrink: !0 },
                              defaultValue: j,
                              onChange: function (e) {
                                return x(e.target.value);
                              },
                            })
                          )
                        ),
                        r.a.createElement(
                          S.a,
                          { container: !0, item: !0, xs: 12 },
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 3, className: ge.label },
                            r.a.createElement(
                              P.a,
                              { variant: 'h6', align: 'right', gutterBottom: !0 },
                              'EMAIL ADDRESS'
                            )
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 8 },
                            r.a.createElement(R.a, {
                              disabled: !0,
                              id: 'email',
                              style: { margin: 0 },
                              fullWidth: !0,
                              margin: 'normal',
                              variant: 'filled',
                              value: p,
                            })
                          )
                        ),
                        r.a.createElement(
                          S.a,
                          { container: !0, item: !0, xs: 12 },
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 3, className: ge.label },
                            r.a.createElement(
                              P.a,
                              { variant: 'h6', align: 'right', gutterBottom: !0 },
                              'PHONE NUMBER'
                            )
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 8 },
                            r.a.createElement(
                              ra.a,
                              {
                                mask: '999 999 9999',
                                defaultValue: '000 000 0000',
                                value: k,
                                disabled: !1,
                                maskChar: ' ',
                                onChange: function (e) {
                                  return I(e.target.value);
                                },
                              },
                              function () {
                                return r.a.createElement(R.a, {
                                  style: { margin: 0 },
                                  placeholder: 'Phone number',
                                  fullWidth: !0,
                                  margin: 'normal',
                                  variant: 'outlined',
                                });
                              }
                            ),
                            r.a.createElement(
                              'div',
                              { className: ge.errMsg },
                              Z.length > 0 ? r.a.createElement(la, { severity: 'error' }, Z) : ''
                            )
                          )
                        ),
                        r.a.createElement(
                          S.a,
                          { container: !0, item: !0, xs: 12 },
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 3, className: ge.label },
                            r.a.createElement(
                              P.a,
                              { variant: 'h6', align: 'right', gutterBottom: !0 },
                              'WHERE YOU LIVE'
                            )
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 8 },
                            r.a.createElement(
                              S.a,
                              { item: !0, xs: 8 },
                              r.a.createElement(R.a, {
                                id: 'address',
                                style: { margin: 0 },
                                placeholder: 'Address',
                                fullWidth: !0,
                                margin: 'normal',
                                variant: 'outlined',
                                defaultValue: Y,
                                onChange: function (e) {
                                  return L(e.target.value);
                                },
                              })
                            )
                          )
                        ),
                        r.a.createElement(
                          S.a,
                          { container: !0, item: !0, xs: 12 },
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 3, className: ge.label },
                            r.a.createElement(
                              P.a,
                              { variant: 'h6', align: 'right', gutterBottom: !0 },
                              'DESCRIBE YOUR SELF'
                            )
                          ),
                          r.a.createElement(
                            S.a,
                            { item: !0, xs: 8 },
                            r.a.createElement(
                              S.a,
                              { item: !0, xs: 8 },
                              r.a.createElement(R.a, {
                                id: 'address',
                                style: { margin: 0 },
                                placeholder: 'About you',
                                fullWidth: !0,
                                multiline: !0,
                                rows: 8,
                                margin: 'normal',
                                variant: 'outlined',
                                defaultValue: W,
                                onChange: function (e) {
                                  return A(e.target.value);
                                },
                              })
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        be.a,
                        { className: ge.box },
                        r.a.createElement(
                          w.a,
                          {
                            type: 'submit',
                            variant: 'contained',
                            color: 'primary',
                            className: ge.saveBtn,
                            onClick: oe,
                          },
                          'SAVE'
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  H.a,
                  { open: K, autoHideDuration: 1500, onClose: ue },
                  r.a.createElement(la, { onClose: ue, severity: 'success' }, 'Saved successfully!')
                )
              )
            : r.a.createElement(
                P.a,
                {
                  component: 'h1',
                  variant: 'h1',
                  align: 'center',
                  className: ge.search,
                  gutterBottom: !0,
                },
                'Loading...'
              );
        },
        oa = t(172);
      function sa(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 6, variant: 'filled' }, e));
      }
      function ma(e) {
        var a = Object(_.a)(function (e) {
            return {
              root: {
                display: 'flex',
                flexWrap: 'wrap',
                '& > *': { width: e.spacing(100), height: e.spacing(80) },
              },
              box: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: e.spacing(5),
              },
              uploadBtn: {
                margin: e.spacing(2),
                padding: e.spacing(2),
                paddingLeft: e.spacing(5),
                paddingRight: e.spacing(5),
              },
            };
          }),
          t = Object(n.useState)(!1),
          l = Object(v.a)(t, 2),
          c = l[0],
          i = l[1],
          o = Object(n.useState)(!1),
          s = Object(v.a)(o, 2),
          m = s[0],
          u = s[1],
          g = Object(n.useState)(null),
          p = Object(v.a)(g, 2),
          d = p[0],
          E = p[1],
          h = Object(n.useState)([]),
          b = Object(v.a)(h, 2),
          y = b[0],
          O = b[1];
        Object(n.useEffect)(
          function () {
            f.a
              .get('/profile/ref/'.concat(e.userID))
              .then(function (e) {
                E(e.data);
              })
              .catch(function (e) {
                console.log('error: ', e);
              });
          },
          [e.userID]
        );
        var N = function (e, a) {
            'clickaway' !== a && (i(!1), u(!1));
          },
          j = a();
        return d
          ? r.a.createElement(
              n.Fragment,
              null,
              r.a.createElement(
                me.a,
                { maxWidth: 'lg', className: j.root },
                r.a.createElement(
                  ve.a,
                  { elevation: 3 },
                  r.a.createElement(
                    be.a,
                    { className: j.box },
                    r.a.createElement(
                      P.a,
                      { variant: 'h1', align: 'center', gutterBottom: !0 },
                      'About Photo Album'
                    ),
                    r.a.createElement(oa.a, {
                      acceptedFiles: ['image/*'],
                      onChange: function (e) {
                        O(e);
                      },
                      showFileNames: !0,
                      dropzoneText: 'Choose Images that you want to use',
                      showAlerts: !1,
                      filesLimit: 4,
                    }),
                    r.a.createElement(
                      w.a,
                      {
                        variant: 'contained',
                        color: 'primary',
                        className: j.uploadBtn,
                        onClick: function (e) {
                          if (0 === y.length) u(!0);
                          else {
                            for (var a = new FormData(), t = 0; t < y.length; t++)
                              a.append('images', y[t]);
                            f.a
                              .put('/profile/uploadAlbum/'.concat(d.userID), a)
                              .then(function (e) {
                                e.data.error || (i(!0), O([]));
                              })
                              .catch(function (e) {
                                console.log('error: ', e);
                              });
                          }
                        },
                      },
                      'UPDATE'
                    )
                  )
                )
              ),
              r.a.createElement(
                H.a,
                { open: c, autoHideDuration: 3e3, onClose: N },
                r.a.createElement(
                  sa,
                  { onClose: N, severity: 'success' },
                  'Profile photo updated successfully!'
                )
              ),
              r.a.createElement(
                H.a,
                { open: m, autoHideDuration: 3e3, onClose: N },
                r.a.createElement(
                  sa,
                  { onClose: N, severity: 'error' },
                  'Please upload image at least one'
                )
              )
            )
          : r.a.createElement(
              P.a,
              {
                component: 'h1',
                variant: 'h1',
                align: 'center',
                className: j.search,
                gutterBottom: !0,
              },
              'Loading...'
            );
      }
      var ua = t(95),
        ga = t.n(ua);
      function pa(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 6, variant: 'filled' }, e));
      }
      var da = Object(_.a)(function (e) {
        return {
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': { width: e.spacing(100), height: e.spacing(80) },
          },
          box: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: e.spacing(5),
          },
          uploadBtn: {
            margin: e.spacing(2),
            padding: e.spacing(2),
            paddingLeft: e.spacing(5),
            paddingRight: e.spacing(5),
          },
          deleteBtn: { color: e.palette.text.secondary },
          saveBtn: {
            margin: e.spacing(2),
            padding: e.spacing(2),
            paddingLeft: e.spacing(5),
            paddingRight: e.spacing(5),
          },
          photo: { margin: e.spacing(5), width: e.spacing(25), height: e.spacing(25) },
        };
      });
      var fa = function (e) {
          var a = Object(n.useState)(''),
            t = Object(v.a)(a, 2),
            l = t[0],
            c = t[1],
            i = Object(n.useState)(''),
            o = Object(v.a)(i, 2),
            s = o[0],
            m = o[1],
            u = Object(n.useState)(!1),
            g = Object(v.a)(u, 2),
            p = g[0],
            d = g[1],
            E = Object(n.useState)(!1),
            h = Object(v.a)(E, 2),
            b = h[0],
            y = h[1],
            O = Object(n.useState)(null),
            N = Object(v.a)(O, 2),
            j = N[0],
            x = N[1],
            D = Object(n.useState)(!1),
            T = Object(v.a)(D, 2),
            I = T[0],
            C = T[1],
            M = Object(n.useState)(null),
            Y = Object(v.a)(M, 2),
            L = Y[0],
            B = Y[1];
          Object(n.useEffect)(
            function () {
              f.a
                .get('/profile/ref/'.concat(e.userID))
                .then(function (e) {
                  x(e.data),
                    void 0 !== e.data.profileImg &&
                      B(
                        ''.concat(
                          'https://team-kiwi.s3.ca-central-1.amazonaws.com/' + e.data.profileImg
                        )
                      ),
                    C(!0);
                })
                .catch(function (e) {
                  console.log('error: ', e);
                });
            },
            [e.userID]
          );
          var R = function (e, a) {
              'clickaway' !== a && (d(!1), y(!1));
            },
            F = da();
          return I
            ? r.a.createElement(
                n.Fragment,
                null,
                r.a.createElement(
                  me.a,
                  { maxWidth: 'lg', className: F.root },
                  r.a.createElement(
                    ve.a,
                    { elevation: 3 },
                    r.a.createElement(
                      be.a,
                      { className: F.box },
                      r.a.createElement(
                        P.a,
                        { variant: 'h1', align: 'center', gutterBottom: !0 },
                        'Profile Photo'
                      ),
                      r.a.createElement(k.a, { alt: 'Remy Sharp', src: L, className: F.photo }),
                      r.a.createElement(
                        P.a,
                        { variant: 'h6', color: 'textSecondary' },
                        'Be sure to use a photo that clearly shows your face'
                      ),
                      r.a.createElement(
                        S.a,
                        null,
                        r.a.createElement('input', {
                          style: { display: 'none' },
                          accept: 'image/*',
                          id: 'raised-button-file',
                          type: 'file',
                          file: s,
                          value: l,
                          onChange: function (e) {
                            m(e.target.files[0]), c(e.target.value);
                          },
                        }),
                        r.a.createElement(
                          'label',
                          { htmlFor: 'raised-button-file' },
                          r.a.createElement(
                            w.a,
                            {
                              variant: 'outlined',
                              color: 'primary',
                              component: 'span',
                              name: 'file',
                              className: F.uploadBtn,
                            },
                            '' === l ? 'SELECT Image' : l
                          )
                        ),
                        r.a.createElement(w.a, {
                          color: 'default',
                          className: F.deleteBtn,
                          startIcon: r.a.createElement(ga.a, null),
                          onClick: function (e) {
                            m(''), c('');
                          },
                        })
                      ),
                      r.a.createElement(
                        w.a,
                        {
                          variant: 'contained',
                          color: 'primary',
                          className: F.saveBtn,
                          onClick: function (e) {
                            var a = new FormData();
                            a.append('image', s),
                              0 === s.length
                                ? y(!0)
                                : f.a
                                    .post('/profile/uploadPhoto/'.concat(j.userID), a)
                                    .then(function (e) {
                                      e.data.error || (B(e.data.Location), m(''), c(''), d(!0));
                                    })
                                    .catch(function (e) {
                                      console.log('error: ', e);
                                    });
                          },
                        },
                        'UPDATE'
                      )
                    )
                  )
                ),
                r.a.createElement(
                  H.a,
                  { open: p, autoHideDuration: 3e3, onClose: R },
                  r.a.createElement(
                    pa,
                    { onClose: R, severity: 'success' },
                    'Profile photo updated successfully!'
                  )
                ),
                r.a.createElement(
                  H.a,
                  { open: b, autoHideDuration: 3e3, onClose: R },
                  r.a.createElement(
                    pa,
                    { onClose: R, severity: 'error' },
                    'Please upload image to update'
                  )
                )
              )
            : r.a.createElement(
                P.a,
                {
                  component: 'h1',
                  variant: 'h1',
                  align: 'center',
                  className: F.search,
                  gutterBottom: !0,
                },
                'Loading...'
              );
        },
        Ea = function () {
          return r.a.createElement('div', null, r.a.createElement('h1', null, 'Your availability'));
        },
        ha = t(337),
        ba = t(342);
      var va = function (e) {
        var a = e.brand,
          t = Object(_.a)(function (e) {
            return {
              box: { width: e.spacing(44.24), height: e.spacing(28) },
              logo: { width: 100, height: 60, borderRadius: '0.75rem' },
              checkbox: { width: e.spacing(2), height: e.spacing(2) },
            };
          })(),
          n = r.a.useState(!1),
          l = Object(v.a)(n, 2),
          c = l[0],
          i = l[1];
        return r.a.createElement(
          S.a,
          { container: !0, item: !0, xs: 6 },
          r.a.createElement(
            ue.a,
            { variant: 'outlined', className: t.box },
            r.a.createElement(ha.a, {
              avatar: r.a.createElement(k.a, {
                className: t.logo,
                variant: 'rounded',
                src: 'master' === a ? '/images/master.png' : '/images/visa.png',
              }),
              action: r.a.createElement(ba.a, {
                checked: c,
                onChange: function (e) {
                  i(e.target.checked);
                },
                color: 'primary',
                size: 'medium',
                inputProps: { 'aria-label': 'primary checkbox' },
              }),
            }),
            r.a.createElement(
              ge.a,
              null,
              r.a.createElement(
                P.a,
                { variant: 'h5', align: 'left', gutterBottom: !0 },
                '**** **** **** 2445'
              ),
              r.a.createElement(
                P.a,
                {
                  variant: 'h5',
                  align: 'left',
                  gutterBottom: !0,
                  color: 'theme.palette.text.secondary',
                },
                'Exp. Date 11/24'
              ),
              r.a.createElement(P.a, { variant: 'h5', align: 'left', gutterBottom: !0 }, 'John Doe')
            )
          )
        );
      };
      var ya = function () {
          var e = Object(_.a)(function (e) {
            return {
              root: {
                display: 'flex',
                flexWrap: 'wrap',
                '& > *': { width: e.spacing(100), height: e.spacing(80) },
              },
              box: { padding: e.spacing(5) },
              innerbox: { display: 'flex', alignItems: 'left', padding: e.spacing(4) },
              uploadBtn: { margin: e.spacing(5), padding: e.spacing(2), marginRight: e.spacing(1) },
              deleteBtn: { color: e.palette.text.secondary },
              photo: { margin: e.spacing(5), width: e.spacing(25), height: e.spacing(25) },
            };
          })();
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(
              me.a,
              { maxWidth: 'lg', className: e.root },
              r.a.createElement(
                ve.a,
                { elevation: 3 },
                r.a.createElement(
                  be.a,
                  { className: e.box },
                  r.a.createElement(
                    P.a,
                    { variant: 'h1', align: 'center', gutterBottom: !0 },
                    'Payment Methods'
                  )
                ),
                r.a.createElement(
                  be.a,
                  { className: e.innerbox },
                  r.a.createElement(
                    S.a,
                    { container: !0, spacing: 3, className: e.grid },
                    r.a.createElement(
                      S.a,
                      { container: !0, item: !0, xs: 12 },
                      r.a.createElement(
                        P.a,
                        { variant: 'h6', color: 'textSecondary' },
                        'Saved Payment Profiles:'
                      )
                    ),
                    r.a.createElement(va, { brand: 'master' }),
                    r.a.createElement(va, { brand: 'visa' })
                  )
                )
              )
            )
          );
        },
        Oa = function () {
          return r.a.createElement('div', null, r.a.createElement('h1', null, 'Security'));
        },
        Na = function () {
          return r.a.createElement('div', null, r.a.createElement('h1', null, 'Settings'));
        },
        ja = Object(_.a)(function (e) {
          return {
            list: { color: e.palette.text.secondary, width: '100%', maxWidth: 360 },
            listItem: { padding: e.spacing(3) },
          };
        });
      var xa = function (e) {
          var a = ja(),
            t = r.a.useState(0),
            l = Object(v.a)(t, 2),
            c = l[0],
            i = l[1],
            o = function (e, a) {
              i(a);
            };
          function s(e) {
            var t = e.primary,
              n = e.to,
              l = e.index,
              i = r.a.useMemo(
                function () {
                  return r.a.forwardRef(function (e, a) {
                    return r.a.createElement(y.b, Object.assign({ ref: a, to: n }, e));
                  });
                },
                [n]
              );
            return r.a.createElement(
              Q.a,
              {
                button: !0,
                component: i,
                className: a.listItem,
                selected: c === l,
                onClick: function (e) {
                  return o(e, l);
                },
              },
              r.a.createElement($.a, { primary: t })
            );
          }
          return (
            Object(n.useEffect)(function () {}, [e.userID]),
            r.a.createElement(
              n.Fragment,
              null,
              r.a.createElement(
                me.a,
                { maxwidth: 'lg' },
                r.a.createElement(
                  be.a,
                  { pt: 6 },
                  r.a.createElement(
                    S.a,
                    { container: !0 },
                    r.a.createElement(
                      y.a,
                      null,
                      r.a.createElement(
                        S.a,
                        { container: !0, item: !0, xs: 3 },
                        r.a.createElement(
                          K.a,
                          { className: a.list },
                          r.a.createElement(s, {
                            to: '/profile',
                            primary: 'Edit Profile',
                            index: 0,
                          }),
                          r.a.createElement(s, {
                            to: '/profile/photo',
                            primary: 'Profile Photo',
                            index: 1,
                          }),
                          r.a.createElement(s, {
                            to: '/profile/album',
                            primary: 'Album',
                            index: 2,
                          }),
                          r.a.createElement(s, {
                            to: '/profile/availability',
                            primary: 'Your availability',
                            index: 3,
                          }),
                          r.a.createElement(s, {
                            to: '/profile/payment',
                            primary: 'Payment',
                            index: 4,
                          }),
                          r.a.createElement(s, {
                            to: '/profile/security',
                            primary: 'Security',
                            index: 5,
                          }),
                          r.a.createElement(s, {
                            to: '/profile/settings',
                            primary: 'Settings',
                            index: 6,
                          })
                        )
                      ),
                      r.a.createElement(
                        S.a,
                        { container: !0, item: !0, xs: 9 },
                        r.a.createElement(
                          p.c,
                          null,
                          r.a.createElement(
                            p.a,
                            { exact: !0, path: '/profile' },
                            r.a.createElement(ia, { userID: e.userID })
                          ),
                          r.a.createElement(
                            p.a,
                            { path: '/profile/photo' },
                            r.a.createElement(fa, { userID: e.userID })
                          ),
                          r.a.createElement(
                            p.a,
                            { path: '/profile/album' },
                            r.a.createElement(ma, { userID: e.userID })
                          ),
                          r.a.createElement(
                            p.a,
                            { path: '/profile/availability' },
                            r.a.createElement(Ea, null)
                          ),
                          r.a.createElement(
                            p.a,
                            { path: '/profile/payment' },
                            r.a.createElement(ya, null)
                          ),
                          r.a.createElement(
                            p.a,
                            { path: '/profile/security' },
                            r.a.createElement(Oa, null)
                          ),
                          r.a.createElement(
                            p.a,
                            { path: '/profile/settings' },
                            r.a.createElement(Na, null)
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Sa = (t(264), t(168)),
        wa = t.n(Sa),
        Da = t(169),
        Ta = t.n(Da);
      var ka = function () {
          return r.a.createElement(
            'div',
            { className: 'Calendar' },
            r.a.createElement(
              'div',
              { className: 'head' },
              r.a.createElement('button', null, r.a.createElement(wa.a, null)),
              r.a.createElement('span', { className: 'title' }, ee()().format('MMMM YYYY')),
              r.a.createElement('button', null, r.a.createElement(Ta.a, null))
            ),
            r.a.createElement(
              'div',
              { className: 'body' },
              r.a.createElement(
                'div',
                { className: 'row' },
                r.a.createElement(
                  'div',
                  { className: 'box' },
                  r.a.createElement('span', { className: 'text' }, 'SUN')
                ),
                r.a.createElement(
                  'div',
                  { className: 'box' },
                  r.a.createElement('span', { className: 'text' }, 'MON')
                ),
                r.a.createElement(
                  'div',
                  { className: 'box' },
                  r.a.createElement('span', { className: 'text' }, 'TUE')
                ),
                r.a.createElement(
                  'div',
                  { className: 'box' },
                  r.a.createElement('span', { className: 'text' }, 'WED')
                ),
                r.a.createElement(
                  'div',
                  { className: 'box' },
                  r.a.createElement('span', { className: 'text' }, 'THU')
                ),
                r.a.createElement(
                  'div',
                  { className: 'box' },
                  r.a.createElement('span', { className: 'text' }, 'FRI')
                ),
                r.a.createElement(
                  'div',
                  { className: 'box' },
                  r.a.createElement('span', { className: 'text' }, 'SAT')
                )
              ),
              (function () {
                for (
                  var e = ee()(),
                    a = e.clone().startOf('month').week(),
                    t =
                      1 === e.clone().endOf('month').week() ? 53 : e.clone().endOf('month').week(),
                    n = [],
                    l = function (a) {
                      n.push(
                        r.a.createElement(
                          'div',
                          { className: 'row', key: a },
                          Array(7)
                            .fill(0)
                            .map(function (t, n) {
                              var l = e
                                  .clone()
                                  .week(a)
                                  .startOf('week')
                                  .add(t + n, 'day'),
                                c = e.format('YYYYMMDD') === l.format('YYYYMMDD') ? 'selected' : '',
                                i = l.format('MM') === e.format('MM') ? '' : 'grayed';
                              return r.a.createElement(
                                'div',
                                { className: 'box  '.concat(c, ' ').concat(i), key: n },
                                r.a.createElement('span', { className: 'text' }, l.format('D'))
                              );
                            })
                        )
                      );
                    },
                    c = a;
                  c <= t;
                  c++
                )
                  l(c);
                return n;
              })()
            )
          );
        },
        Ia = t(170),
        Ca = t.n(Ia),
        Ma = t(306);
      function Ya(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 7, variant: 'filled' }, e));
      }
      var Pa = Object(_.a)(function (e) {
        return {
          root: { width: 360, height: 125, marginTop: e.spacing(1) },
          header: { height: 50, padding: e.spacing(1) },
          contents: { padding: e.spacing(0.5) },
          date: { float: 'left', marginLeft: e.spacing(0.5), marginTop: e.spacing(1) },
          settings: { float: 'right' },
          avatar: {
            float: 'left',
            width: e.spacing(6),
            height: e.spacing(6),
            marginLeft: e.spacing(1),
          },
          name: { float: 'left', marginLeft: e.spacing(1), padding: e.spacing(1.5) },
          status: {
            float: 'right',
            marginTop: e.spacing(1.5),
            marginRight: e.spacing(1.5),
            color: e.palette.text.secondary,
          },
          modal: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          requestForm: { flexWrap: 'wrap', width: 345, height: 400 },
          datePicker: { marginRight: e.spacing(1), width: 200, float: 'left' },
        };
      });
      function La(e) {
        var a = Pa(),
          t = Object(n.useState)(),
          l = Object(v.a)(t, 2),
          c = l[0],
          i = l[1],
          o = Object(n.useState)(),
          s = Object(v.a)(o, 2),
          m = s[0],
          u = s[1],
          g = Object(n.useState)(),
          p = Object(v.a)(g, 2),
          d = p[0],
          E = p[1],
          h = Object(n.useState)(),
          b = Object(v.a)(h, 2),
          y = b[0],
          O = b[1],
          N = Object(n.useState)(),
          j = Object(v.a)(N, 2),
          x = j[0],
          D = j[1],
          T = Object(n.useState)(),
          I = Object(v.a)(T, 2),
          C = I[0],
          M = I[1],
          Y = Object(n.useState)(!1),
          L = Object(v.a)(Y, 2),
          B = L[0],
          F = L[1],
          W = Object(n.useState)(!1),
          A = Object(v.a)(W, 2),
          q = A[0],
          z = A[1],
          U = Object(n.useState)(!1),
          G = Object(v.a)(U, 2),
          V = G[0],
          _ = G[1];
        Object(n.useEffect)(
          function () {
            i(e.booking.accepted),
              u(e.booking.declined),
              E(ee()(e.booking.start).format('YYYY-MM-DDTHH:mm')),
              O(ee()(e.booking.end).format('YYYY-MM-DDTHH:mm')),
              D(ee()(e.booking.start).format('YYYY-MM-DDTHH:mm')),
              M(ee()(e.booking.end).format('YYYY-MM-DDTHH:mm'));
          },
          [e]
        );
        var K = e.booking.sitterProfile[0].firstName + ' ' + e.booking.sitterProfile[0].lastName,
          Q =
            'https://team-kiwi.s3.ca-central-1.amazonaws.com/' +
            e.booking.sitterProfile[0].profileImg,
          J = function () {
            F(!1);
          },
          $ = function (e, a) {
            'clickaway' !== a && (z(!1), _(!1));
          },
          Z = (function () {
            var a = Object(qe.a)(
              He.a.mark(function a() {
                var t, n;
                return He.a.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (!(x >= C)) {
                          a.next = 3;
                          break;
                        }
                        return _(!0), a.abrupt('return');
                      case 3:
                        return (
                          (t = 14 * ee.a.duration(ee()(C).diff(ee()(x))).asHours()),
                          (n = { start: x, end: C, cost: t.toFixed(2) }),
                          (a.next = 7),
                          f.a
                            .put('/request/'.concat(e.booking._id), n)
                            .then(function (e) {
                              e.data.error || (J(), z(!0), E(x), O(C));
                            })
                            .catch(function (e) {
                              console.log('error: ', e);
                            })
                        );
                      case 7:
                      case 'end':
                        return a.stop();
                    }
                }, a);
              })
            );
            return function () {
              return a.apply(this, arguments);
            };
          })();
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            ue.a,
            { className: a.root, variant: 'outlined' },
            r.a.createElement(
              ge.a,
              { className: a.header },
              r.a.createElement(
                P.a,
                { variant: 'body', className: a.date },
                (function () {
                  var e = ee()(d),
                    a = ee()(y);
                  return (
                    e.format('D MMM YYYY, hA-') +
                    (e.year() === a.year()
                      ? e.month() === a.month() && e.day() === a.day()
                        ? a.format('hA')
                        : a.format('D MMM, hA')
                      : a.format('D MMM YYYY, hA'))
                  );
                })()
              ),
              !e.closed &&
                !c &&
                !m &&
                r.a.createElement(
                  Ma.a,
                  {
                    'aria-label': 'settings',
                    className: a.settings,
                    onClick: function () {
                      F(!0);
                    },
                  },
                  r.a.createElement(Ca.a, null)
                )
            ),
            r.a.createElement(
              ge.a,
              { className: a.contents },
              r.a.createElement(k.a, {
                'aria-label': 'recipe',
                className: a.avatar,
                alt: '',
                src: Q,
              }),
              r.a.createElement(P.a, { variant: 'h6', className: a.name, gutterBottom: !0 }, K),
              r.a.createElement(
                P.a,
                { variant: 'h6', className: a.status, gutterBottom: !0 },
                c ? 'ACCEPTED' : m ? 'DECLINED' : 'PENDING'
              )
            )
          ),
          r.a.createElement(
            Ie.a,
            {
              className: a.modal,
              open: B,
              onClose: J,
              closeAfterTransition: !0,
              BackdropComponent: Ce.a,
              BackdropProps: { timeout: 500 },
            },
            r.a.createElement(
              'div',
              { style: { outline: 0 } },
              r.a.createElement(
                Me.a,
                { in: B },
                r.a.createElement(
                  ue.a,
                  { className: a.requestForm, elevation: 5, align: 'center' },
                  r.a.createElement(
                    S.a,
                    null,
                    r.a.createElement(
                      P.a,
                      {
                        variant: 'h2',
                        align: 'center',
                        gutterBottom: !0,
                        style: { marginTop: '25px', fontWeight: '800' },
                      },
                      'CHANGE YOUR BOOKING'
                    )
                  ),
                  r.a.createElement(
                    P.a,
                    { variant: 'h2', align: 'center', style: { margin: '30px' } },
                    K
                  ),
                  r.a.createElement(
                    S.a,
                    { style: { margin: '35px' } },
                    r.a.createElement(
                      P.a,
                      {
                        variant: 'subtitle1',
                        align: 'left',
                        gutterBottom: !0,
                        style: { fontWeight: '800' },
                      },
                      'DROP IN'
                    ),
                    r.a.createElement(R.a, {
                      id: 'datetime-local',
                      type: 'datetime-local',
                      defaultValue: d,
                      className: a.datePicker,
                      InputLabelProps: { shrink: !0 },
                      onChange: function (e) {
                        return D(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    S.a,
                    { style: { margin: '35px', marginTop: '65px' } },
                    r.a.createElement(
                      P.a,
                      {
                        variant: 'subtitle1',
                        align: 'left',
                        gutterBottom: !0,
                        style: { fontWeight: '800' },
                      },
                      'DROP OFF'
                    ),
                    r.a.createElement(R.a, {
                      id: 'datetime-local',
                      type: 'datetime-local',
                      defaultValue: y,
                      className: a.datePicker,
                      InputLabelProps: { shrink: !0 },
                      onChange: function (e) {
                        return M(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    w.a,
                    {
                      variant: 'contained',
                      size: 'large',
                      color: 'primary',
                      style: { marginTop: '45px' },
                      onClick: Z,
                    },
                    'CONFIRM CHANGE'
                  )
                )
              )
            )
          ),
          r.a.createElement(
            H.a,
            { open: q, autoHideDuration: 1500, onClose: $ },
            r.a.createElement(Ya, { onClose: $, severity: 'success' }, 'Changed successfully!')
          ),
          r.a.createElement(
            H.a,
            { open: V, autoHideDuration: 2e3, onClose: $ },
            r.a.createElement(
              Ya,
              { onClose: $, severity: 'error' },
              'Please check request dates and time.'
            )
          )
        );
      }
      var Ba = Object(_.a)(function (e) {
        return {
          root: { width: 360, height: 125, marginTop: e.spacing(1) },
          contents: { align: 'center', marginTop: e.spacing(4) },
        };
      });
      function Ra(e) {
        var a = Ba();
        return r.a.createElement(
          ue.a,
          { className: a.root, variant: 'outlined' },
          r.a.createElement(
            ge.a,
            { className: a.contents },
            r.a.createElement(P.a, { variant: 'h6', gutterBottom: !0 }, 'No bookings right now.')
          )
        );
      }
      var Fa = Object(_.a)(function (e) {
        return {
          root: { flexWrap: 'wrap', width: e.spacing(50) },
          list: { width: 400, height: 600, overflow: 'auto' },
          contents: { padding: e.spacing(1) },
          titleTop: { marginTop: e.spacing(1), marginLeft: e.spacing(1) },
          title: { marginTop: e.spacing(2), marginLeft: e.spacing(1) },
          calendar: { flexWrap: 'wrap', width: 380, height: 400, marginLeft: e.spacing(5) },
        };
      });
      var Wa = function (e) {
          var a = Fa(),
            t = Object(n.useState)([]),
            l = Object(v.a)(t, 2),
            c = l[0],
            i = l[1];
          return (
            Object(n.useEffect)(
              function () {
                f.a.get('/request/'.concat(e.userID)).then(function (e) {
                  var a = e.data;
                  i(a);
                });
              },
              [e.userID]
            ),
            c
              ? r.a.createElement(
                  S.a,
                  {
                    container: !0,
                    spacing: 0,
                    align: 'center',
                    justify: 'center',
                    style: { marginTop: '1%' },
                  },
                  r.a.createElement(
                    S.a,
                    { maxwidth: 'md', className: a.root },
                    r.a.createElement(
                      ue.a,
                      { className: a.list },
                      r.a.createElement(
                        ge.a,
                        { className: a.contents },
                        (function () {
                          var e = ee()().format('YYMMDDhhmm'),
                            t = [],
                            n = [];
                          return (
                            t.push(
                              r.a.createElement(
                                P.a,
                                { variant: 'h6', align: 'left', className: a.titleTop },
                                'CURRENT BOOKINGS:'
                              )
                            ),
                            n.push(
                              r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(J.a, { style: { marginTop: '24px' } }),
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h6', align: 'left', className: a.title },
                                  'PAST BOOKINGS:'
                                )
                              )
                            ),
                            c.forEach(function (a) {
                              ee()(a.start).format('YYMMDDhhmm') > e
                                ? t.push(r.a.createElement(La, { booking: a, closed: !1 }))
                                : n.push(r.a.createElement(La, { booking: a, closed: !0 }));
                            }),
                            1 === t.length && t.push(r.a.createElement(Ra, null)),
                            1 === n.length && n.push(r.a.createElement(Ra, null)),
                            t.concat(n)
                          );
                        })()
                      )
                    )
                  ),
                  r.a.createElement(ue.a, { className: a.calendar }, r.a.createElement(ka, null))
                )
              : r.a.createElement(
                  P.a,
                  {
                    component: 'h1',
                    variant: 'h1',
                    align: 'center',
                    className: a.search,
                    gutterBottom: !0,
                  },
                  'Loading...'
                )
          );
        },
        Aa = Object(_.a)(function (e) {
          return {
            root: { width: 360, height: 125, marginTop: e.spacing(1) },
            header: { marginTop: e.spacing(0), height: 50, padding: e.spacing(1) },
            contents: { height: 75, padding: e.spacing(0.5) },
            date: { float: 'left', marginLeft: e.spacing(0.5), marginTop: e.spacing(1) },
            settings: { float: 'right' },
            avatar: {
              float: 'left',
              width: e.spacing(6),
              height: e.spacing(6),
              marginLeft: e.spacing(1),
            },
            name: { float: 'left', marginLeft: e.spacing(1), padding: e.spacing(1.5) },
            status: {
              float: 'right',
              marginTop: e.spacing(1.5),
              marginRight: e.spacing(1.5),
              color: e.palette.text.secondary,
            },
          };
        });
      function Ha(e) {
        var a = Aa(),
          t = Object(n.useState)(),
          l = Object(v.a)(t, 2),
          c = l[0],
          i = l[1],
          o = Object(n.useState)(),
          s = Object(v.a)(o, 2),
          m = s[0],
          u = s[1],
          g = Object(n.useState)(),
          p = Object(v.a)(g, 2),
          d = p[0],
          f = p[1],
          E = Object(n.useState)(),
          h = Object(v.a)(E, 2),
          b = h[0],
          y = h[1],
          O = Object(n.useState)(),
          N = Object(v.a)(O, 2),
          j = N[0],
          x = N[1];
        Object(n.useEffect)(
          function () {
            i(e.booking.accepted),
              u(e.booking.declined),
              f(ee()(e.booking.start).format('YYYY-MM-DDTHH:mm')),
              y(ee()(e.booking.end).format('YYYY-MM-DDTHH:mm')),
              x(e.jobKey);
          },
          [e]
        );
        var S = e.booking.ownerProfile[0].firstName + ' ' + e.booking.ownerProfile[0].lastName,
          w =
            'https://team-kiwi.s3.ca-central-1.amazonaws.com/' +
            e.booking.ownerProfile[0].profileImg,
          D = function (a) {
            a.preventDefault(), e.onSubmit(j);
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'form',
            { onSubmit: D },
            r.a.createElement(
              ue.a,
              { className: a.root, variant: 'outlined' },
              r.a.createElement(
                ye.a,
                { className: a.button, onClick: D },
                r.a.createElement(
                  ge.a,
                  { className: a.header },
                  r.a.createElement(
                    P.a,
                    { variant: 'body', className: a.date },
                    (function () {
                      var e = ee()(d),
                        a = ee()(b);
                      return (
                        e.format('D MMM YYYY, hA-') +
                        (e.year() === a.year()
                          ? e.month() === a.month() && e.day() === a.day()
                            ? a.format('hA')
                            : a.format('D MMM, hA')
                          : a.format('D MMM YYYY, hA'))
                      );
                    })()
                  )
                ),
                r.a.createElement(
                  ge.a,
                  { className: a.contents },
                  r.a.createElement(k.a, {
                    'aria-label': 'recipe',
                    className: a.avatar,
                    alt: '',
                    src: w,
                  }),
                  r.a.createElement(P.a, { variant: 'h6', className: a.name, gutterBottom: !0 }, S),
                  r.a.createElement(
                    P.a,
                    { variant: 'h6', className: a.status, gutterBottom: !0 },
                    c ? 'ACCEPTED' : m ? 'DECLINED' : 'PENDING'
                  )
                )
              )
            )
          )
        );
      }
      var qa = Object(_.a)(function (e) {
        return {
          root: { width: 360, height: 125, marginTop: e.spacing(1) },
          contents: { align: 'center', marginTop: e.spacing(4) },
        };
      });
      function za(e) {
        var a = qa();
        return r.a.createElement(
          ue.a,
          { className: a.root, variant: 'outlined' },
          r.a.createElement(
            ge.a,
            { className: a.contents },
            r.a.createElement(P.a, { variant: 'h6', gutterBottom: !0 }, 'No jobs right now.')
          )
        );
      }
      function Ua(e) {
        return r.a.createElement(q.a, Object.assign({ elevation: 7, variant: 'filled' }, e));
      }
      var Ga = Object(_.a)(function (e) {
        return {
          root: { flexWrap: 'wrap', width: e.spacing(50) },
          list: { width: 400, height: 600, overflow: 'auto' },
          contents: { padding: e.spacing(1) },
          titleTop: { marginTop: e.spacing(1), marginLeft: e.spacing(1) },
          title: { marginTop: e.spacing(2), marginLeft: e.spacing(1) },
          jobDetail: {
            flexWrap: 'wrap',
            width: 700,
            height: 600,
            marginLeft: e.spacing(5),
            padding: e.spacing(1),
          },
          avatar: { width: e.spacing(13), height: e.spacing(13), marginLeft: e.spacing(1) },
          name: { marginTop: e.spacing(3), marginLeft: e.spacing(3) },
          buttons: {
            marginTop: e.spacing(2),
            '& > *': { width: 140, height: 50, margin: e.spacing(3) },
          },
          notice: { marginLeft: e.spacing(1), color: e.palette.text.secondary },
        };
      });
      var Va = function (e) {
          var a = Ga(),
            t = Object(n.useState)(),
            l = Object(v.a)(t, 2),
            c = l[0],
            i = l[1],
            o = Object(n.useState)([]),
            s = Object(v.a)(o, 2),
            m = s[0],
            u = s[1],
            g = Object(n.useState)(null),
            p = Object(v.a)(g, 2),
            d = p[0],
            E = p[1],
            h = Object(n.useState)(!1),
            b = Object(v.a)(h, 2),
            y = b[0],
            O = b[1],
            N = Object(n.useState)(!1),
            j = Object(v.a)(N, 2),
            x = j[0],
            D = j[1];
          Object(n.useEffect)(
            function () {
              f.a
                .get('/profile/ref/'.concat(e.userID))
                .then(function (e) {
                  var a = e.data;
                  i(a._id);
                })
                .then(
                  f.a.get('/job/'.concat(c)).then(function (e) {
                    var a = e.data;
                    u(a);
                  })
                );
            },
            [e.userID, c]
          );
          var T = function (e) {
              E(e);
            },
            I = function (e) {
              e.preventDefault(), M({ accepted: !0, declined: !1 });
            },
            C = function (e) {
              e.preventDefault(), M({ accepted: !1, declined: !0 });
            },
            M = function (e) {
              f.a
                .put('/job/'.concat(m[d]._id), e)
                .then(function (e) {
                  if (!e.data.error) {
                    var a = re()('http://localhost:4000/confirm');
                    e.data.accepted
                      ? (a.emit('addConfirmNotify', e), O(!0), (m[d].accepted = !0))
                      : (a.emit('addConfirmNotify', e), D(!0), (m[d].declined = !0));
                  }
                })
                .catch(function (e) {
                  console.log('error: ', e);
                });
            },
            Y = function (e, a) {
              if ('clickaway' === a) return O(!1), void D(!1);
            };
          return m
            ? r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  S.a,
                  {
                    container: !0,
                    spacing: 0,
                    align: 'center',
                    justify: 'center',
                    style: { marginTop: '1%' },
                  },
                  r.a.createElement(
                    S.a,
                    { maxwidth: 'md', className: a.root },
                    r.a.createElement(
                      ue.a,
                      { className: a.list },
                      r.a.createElement(
                        ge.a,
                        { className: a.contents },
                        (function () {
                          var e = ee()().format('YYMMDDhhmm'),
                            t = [],
                            n = [];
                          return (
                            t.push(
                              r.a.createElement(
                                P.a,
                                { variant: 'h6', align: 'left', className: a.titleTop },
                                'CURRENT JOBS:'
                              )
                            ),
                            n.push(
                              r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(J.a, { style: { marginTop: '24px' } }),
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h6', align: 'left', className: a.title },
                                  'PAST JOBS:'
                                )
                              )
                            ),
                            m.forEach(function (a, l) {
                              ee()(a.start).format('YYMMDDhhmm') > e
                                ? t.push(
                                    r.a.createElement(Ha, { booking: a, jobKey: l, onSubmit: T })
                                  )
                                : n.push(
                                    r.a.createElement(Ha, { booking: a, jobKey: l, onSubmit: T })
                                  );
                            }),
                            1 === t.length && t.push(r.a.createElement(za, null)),
                            1 === n.length && n.push(r.a.createElement(za, null)),
                            t.concat(n)
                          );
                        })()
                      )
                    )
                  ),
                  r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      S.a,
                      { container: !0, spacing: 0, align: 'center', justify: 'center' },
                      r.a.createElement(
                        ve.a,
                        { className: a.jobDetail },
                        (function () {
                          if (null !== d) {
                            var e =
                              'https://team-kiwi.s3.ca-central-1.amazonaws.com/' +
                              m[d].ownerProfile[0].profileImg;
                            return r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                P.a,
                                { variant: 'h6', align: 'left', className: a.titleTop },
                                'REQUEST DETAIL:'
                              ),
                              r.a.createElement(
                                S.a,
                                { container: !0, style: { marginTop: '3%' } },
                                r.a.createElement(k.a, {
                                  'aria-label': 'recipe',
                                  className: a.avatar,
                                  alt: '',
                                  src: e,
                                }),
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h1', align: 'left', className: a.name },
                                  m[d].ownerProfile[0].firstName,
                                  ' ',
                                  m[d].ownerProfile[0].lastName
                                )
                              ),
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h6',
                                  align: 'left',
                                  className: a.titleTop,
                                  style: { marginTop: '4%' },
                                },
                                'SITTNG SCHEDULE:'
                              ),
                              r.a.createElement(
                                S.a,
                                { container: !0 },
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h5', className: a.titleTop },
                                  ee()(m[d].start).format('D MMM YYYY, hh:mmA'),
                                  ' -',
                                  ' ',
                                  ee()(m[d].end).format('D MMM YYYY, hh:mmA')
                                )
                              ),
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h6',
                                  align: 'left',
                                  className: a.titleTop,
                                  style: { marginTop: '4%' },
                                },
                                'SITTNG COST:'
                              ),
                              r.a.createElement(
                                S.a,
                                { container: !0 },
                                r.a.createElement(
                                  P.a,
                                  { variant: 'h5', className: a.titleTop },
                                  '$',
                                  m[d].cost
                                )
                              ),
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h6',
                                  align: 'left',
                                  className: a.titleTop,
                                  style: { marginTop: '4%' },
                                },
                                'REQUEST FROM OWNER:'
                              ),
                              r.a.createElement(
                                S.a,
                                { container: !0 },
                                r.a.createElement(R.a, {
                                  disabled: !0,
                                  id: 'request',
                                  style: { margin: 0, width: '665px', marginLeft: '1%' },
                                  placeholder: 'None',
                                  fullWidth: !0,
                                  margin: 'normal',
                                  variant: 'outlined',
                                })
                              ),
                              r.a.createElement(
                                'div',
                                { className: a.buttons },
                                m[d].accepted
                                  ? r.a.createElement(
                                      w.a,
                                      {
                                        disabled: !0,
                                        variant: 'outlined',
                                        size: 'large',
                                        color: 'secondary',
                                      },
                                      'Request Accepted'
                                    )
                                  : m[d].declined
                                  ? r.a.createElement(
                                      w.a,
                                      {
                                        disabled: !0,
                                        variant: 'outlined',
                                        size: 'large',
                                        color: 'primary',
                                      },
                                      'Request Declined'
                                    )
                                  : r.a.createElement(
                                      r.a.Fragment,
                                      null,
                                      r.a.createElement(
                                        w.a,
                                        {
                                          variant: 'outlined',
                                          size: 'large',
                                          color: 'secondary',
                                          onClick: I,
                                        },
                                        'Accept'
                                      ),
                                      r.a.createElement(
                                        w.a,
                                        {
                                          variant: 'outlined',
                                          size: 'large',
                                          color: 'primary',
                                          onClick: C,
                                        },
                                        'Decline'
                                      )
                                    )
                              ),
                              r.a.createElement(
                                P.a,
                                {
                                  variant: 'h6',
                                  align: 'left',
                                  className: a.notice,
                                  style: { marginTop: '2%' },
                                },
                                '* Accept / Decline will not be reverted.'
                              )
                            );
                          }
                          return r.a.createElement(
                            P.a,
                            { variant: 'h6', align: 'left', className: a.titleTop },
                            'SELECT YOUR JOB TO REVIEW'
                          );
                        })()
                      )
                    )
                  )
                ),
                r.a.createElement(
                  H.a,
                  { open: y, autoHideDuration: 1500, onClose: Y },
                  r.a.createElement(
                    Ua,
                    { onClose: Y, severity: 'success' },
                    'Request accepted successfully!'
                  )
                ),
                r.a.createElement(
                  H.a,
                  { open: x, autoHideDuration: 2e3, onClose: Y },
                  r.a.createElement(
                    Ua,
                    { onClose: Y, severity: 'warning' },
                    'Request declined.. :('
                  )
                )
              )
            : r.a.createElement(
                P.a,
                {
                  component: 'h1',
                  variant: 'h1',
                  align: 'center',
                  className: a.search,
                  gutterBottom: !0,
                },
                'Loading...'
              );
        },
        _a = (function (e) {
          Object(m.a)(t, e);
          var a = Object(u.a)(t);
          function t() {
            var e;
            return (
              Object(i.a)(this, t),
              ((e = a.call(this)).state = { userId: null }),
              (e.getUser = e.getUser.bind(Object(s.a)(e))),
              (e.componentDidMount = e.componentDidMount.bind(Object(s.a)(e))),
              e
            );
          }
          return (
            Object(o.a)(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.getUser();
                },
              },
              {
                key: 'getUser',
                value: function () {
                  var e = this;
                  f.a.get('/users/').then(function (a) {
                    a.data.user && e.setState({ userId: a.data.user.id });
                  });
                },
              },
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    g.a,
                    { theme: h },
                    r.a.createElement(le, { userID: this.state.userId }),
                    r.a.createElement(
                      p.c,
                      null,
                      r.a.createElement(p.a, { exact: !0, path: '/' }, r.a.createElement(se, null)),
                      r.a.createElement(
                        p.a,
                        { exact: !0, path: '/list' },
                        r.a.createElement(he, { userID: this.state.userId })
                      ),
                      r.a.createElement(
                        p.a,
                        { exact: !0, path: '/requests' },
                        r.a.createElement(Wa, { userID: this.state.userId })
                      ),
                      r.a.createElement(
                        p.a,
                        { exact: !0, path: '/jobs' },
                        r.a.createElement(Va, { userID: this.state.userId })
                      ),
                      r.a.createElement(
                        p.a,
                        { path: '/payment' },
                        r.a.createElement($e, { userID: this.state.userId })
                      ),
                      r.a.createElement(
                        p.a,
                        { path: '/messages' },
                        r.a.createElement(xe, { userID: this.state.userId })
                      ),
                      r.a.createElement(
                        p.a,
                        { path: '/profile' },
                        r.a.createElement(xa, { userID: this.state.userId })
                      ),
                      r.a.createElement(p.a, { path: '/details', component: Le })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      c.a.render(
        r.a.createElement(y.a, { history: C }, r.a.createElement(_a, null)),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[192, 1, 2]],
]);
//# sourceMappingURL=main.40f8bba4.chunk.js.map
