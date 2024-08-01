<< drop view axp_appsearch; >> 




<< ALTER TABLE axuseraccess ALTER COLUMN rname TYPE varchar(50) USING rname::varchar(50); >>



<< CREATE OR REPLACE VIEW axp_appsearch
AS SELECT DISTINCT a.searchtext,
    a.params::text ||
        CASE
            WHEN a.params IS NOT NULL AND lower(a.params::text) !~~ '%~act%'::text THEN '~act=load'::text
            ELSE NULL::text
        END AS params,
    a.hltype,
    a.structname,
    a.username
   FROM ( SELECT s.slno,
            s.searchtext,
            s.params,
            s.hltype,
            s.structname,
            lg.username
           FROM axp_appsearch_data_new s,
            axuseraccess a_1,
            axusergroups g,
            axuserlevelgroups lg
          WHERE a_1.sname::text = s.structname::text AND a_1.rname::text = g.userroles::text AND g.groupname::text = lg.usergroup::text AND (a_1.stype::text = ANY (ARRAY['t'::character varying::text, 'i'::character varying::text]))
          GROUP BY s.searchtext, s.params, s.hltype, s.structname, lg.username, s.slno
        UNION
         SELECT b.slno,
            b.searchtext,
            b.params,
            b.hltype,
            b.structname,
            lg.username
           FROM axuserlevelgroups lg,
            ( SELECT DISTINCT s.searchtext,
                    s.params,
                    s.hltype,
                    s.structname,
                    0 AS slno
                   FROM axp_appsearch_data_new s
                     LEFT JOIN axuseraccess a_1 ON s.structname::text = a_1.sname::text AND (a_1.stype::text = ANY (ARRAY['t'::character varying::text, 'i'::character varying::text]))) b
          WHERE lg.usergroup::text = 'default'::text
  ORDER BY 1, 6) a; >>

