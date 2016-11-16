const Comments = () => (
  <section className="comments">
    <div className="comment-thread">
      <article className="comment">
        <div className="comment__header">
          <div className="author-data">
            <div className="author-data__main">
              <div className="author author--inline">
                <a href="#" className="author__avatar">
                  <img src="/images/demo-avatar.jpg" alt="" />
                </a>
                <a href="#" className="author__name">
                  Marc Serres
                </a>
                <time dateTime="2016-08-01T19:47Z">1-08-2016 21:47</time>
              </div>
            </div>
            <div className="author-data__extra">
              <a href="#">
                Interact
              </a>
            </div>
          </div>
        </div>
        <div className="comment__content">
          <p>
            <span className="success label">A favor</span>
            Quan sento parlar de contaminació acústica, penso que no hi ha veïns
            en tota la ciutat més perjudicats que nosaltres, els que vivim al Pg
            de la Vall d'Hebron des del 198 al 208. Per no parlar de la
            contaminació atmosfèrica, els tubs d'escapament dels vehicles gairabé
            s'evacuarien directament al nostre menjador si no fos que mantenim les
            finestres i terrasses tencades de manera permanent.</p>
        </div>
        <div className="comment__footer">
          <button className="comment__reply muted-link" data-toggle="comment1-reply">
            Responder</button>
          <div className="comment__votes">
            <a href="" className="comment__votes--up">
              257
            </a>
            <a href="" className="comment__votes--down">
              257
            </a>
          </div>
        </div>
        <div className="add-comment add-comment--reply" id="comment1-reply"
            data-toggler=".is-active">
          <form>
            <label className="show-for-sr" htmlFor="add-comment-1">Resposta</label>
            <textarea id="add-comment-1"
              placeholder="Respon a aquest comentari"></textarea>
            <input type="submit" className="button small hollow" value="Enviar" />
          </form>
        </div>
      </article>
    </div>

    <h6 className="comment-thread__title">
      Conversación con <a href="">Maria Garcia</a></h6>
    <div className="comment-thread">
      <article className="comment">
        <div className="comment__header">
          <div className="author-data">
            <div className="author-data__main">
              <div className="author author--inline">
                <a href="#" className="author__avatar">
                  <img src="/images/demo-avatar.jpg" alt="" />
                </a>
                <a href="#" className="author__name">
                  Maria Garcia
                </a>
                <time dateTime="2016-08-01T19:47Z">1-08-2016 21:47</time>
              </div>
            </div>
            <div className="author-data__extra">
            </div>
          </div>
        </div>
        <div className="comment__content">
          <p>
            <span className="alert label">En contra</span>
            Treure l'àrea per a gossos de la platja de llevant i posar-la a una
            platja més centrica amb millor comunicació amb el transport públic i
            amb més espai.</p>
        </div>
        <div className="comment__footer">
          <button className="comment__reply muted-link">
            Responder
          </button>
          <div className="comment__votes">
            <a href="" className="comment__votes--up">
              257
            </a>
            <a href="" className="comment__votes--down">
              257
            </a>
          </div>
        </div>
        <article className="comment comment--highlight comment--nested">
          <div className="comment__header">
            <div className="author-data">
              <div className="author-data__main">
                <div className="author author--inline">
                  <a href="#" className="author__avatar">
                    <img src="/images/demo-avatar.jpg" alt="" />
                  </a>
                  <a href="#" className="author__name">
                    Ajuntament de Barcelona
                  </a>
                  <time dateTime="2016-08-01T19:47Z">1-08-2016 21:47</time>
                </div>
              </div>
              <div className="author-data__extra">
              </div>
            </div>
          </div>
          <div className="comment__content">
            <p>Quan sento parlar de contaminació acústica, penso que no hi ha
              veïns en tota la ciutat més perjudicats que nosaltres, els que vivim
              al Pg de la Vall d'Hebron des del 198 al 208. Per no parlar de la
              contaminació atmosfèrica, els tubs d'escapament dels vehicles
              gairabé s'evacuarien directament al nostre menjador si no fos que
              mantenim les finestres i terrasses tencades de manera permanent.</p>
          </div>
          <div className="comment__footer">
            <button className="comment__reply muted-link">
              Responder
            </button>
            <div className="comment__votes">
              <a href="" className="comment__votes--up">
                257
              </a>
              <a href="" className="comment__votes--down">
                257
              </a>
            </div>
          </div>
        </article>
        <article className="comment comment--nested">
          <div className="comment__header">
            <div className="author-data">
              <div className="author-data__main">
                <div className="author author--inline">
                  <a href="#" className="author__avatar">
                    <img src="/images/demo-avatar.jpg" alt="" />
                  </a>
                  <a href="#" className="author__name">
                    Joan Pèrez
                  </a>
                  <time dateTime="2016-08-01T19:47Z">1-08-2016 21:47</time>
                </div>
              </div>
              <div className="author-data__extra">
              </div>
            </div>
          </div>
          <div className="comment__content">
            <p>Al meu entendre, en l'actualitat es requereix un ús provisional per
              al solar d'Avinguda Piferrer (Gràcia). Per aquest motiu, considero
              que provisionalment es podria oferir l'espai als memebres del Banc
              Expropiat. Hem d'aturar aquest conflicte. L'institut Vallcarca es
              absolutament necessàri, pero aquesta resposta immediata podria tenir
              un fort impacte en la pau social del barri, sense representar una
              demóra sustancial en la construcció de l'institut.</p>
          </div>
          <div className="comment__footer">
            <button className="comment__reply muted-link">
              Responder
            </button>
            <div className="comment__votes">
              <a href="" className="comment__votes--up">
                257
              </a>
              <a href="" className="comment__votes--down">
                257
              </a>
            </div>
          </div>
          <article className="comment comment--nested comment--nested--alt">
            <div className="comment__header">
              <div className="author-data">
                <div className="author-data__main">
                  <div className="author author--inline">
                    <a href="#" className="author__avatar">
                      <img src="/images/demo-avatar.jpg" alt="" />
                    </a>
                    <a href="#" className="author__name">
                      Maria Garcia
                    </a>
                    <time dateTime="2016-08-01T19:47Z">1-08-2016 21:47</time>
                  </div>
                </div>
                <div className="author-data__extra">
                </div>
              </div>
          </div>
          <div className="comment__content">
            <p>Quan sento parlar de contaminació acústica, penso que no hi ha veïns
            en tota la ciutat més perjudicats que nosaltres, els que vivim al Pg
            de la Vall d'Hebron des del 198 al 208. Per no parlar de la
            contaminació atmosfèrica, els tubs d'escapament dels vehicles gairabé
            s'evacuarien directament al nostre menjador si no fos que mantenim les
            finestres i terrasses tencades de manera permanent.</p>
          </div>
          <div className="comment__footer">
            <button className="comment__reply muted-link">
              Responder
            </button>
            <div className="comment__votes">
              <a href="" className="comment__votes--up">
                257
              </a>
              <a href="" className="comment__votes--down">
                257
              </a>
            </div>
          </div>
        </article>
        <article className="comment comment--nested comment--nested--alt">
          <div className="comment__header">
            <div className="author-data">
              <div className="author-data__main">
                <div className="author author--inline">
                  <a href="#" className="author__avatar">
                    <img src="/images/demo-avatar.jpg" alt="" />
                  </a>
                  <a href="#" className="author__name">
                    Judith Asensi
                  </a>
                  <time dateTime="2016-08-01T19:47Z">1-08-2016 21:47</time>
                </div>
              </div>
              <div className="author-data__extra">
              </div>
            </div>
          </div>
          <div className="comment__content">
            <p>Quan sento parlar de contaminació acústica, penso que no hi ha veïns
            en tota la ciutat més perjudicats que nosaltres, els que vivim al Pg
            de la Vall d'Hebron des del 198 al 208. Per no parlar de la
            contaminació atmosfèrica, els tubs d'escapament dels vehicles gairabé
            s'evacuarien directament al nostre menjador si no fos que mantenim les
            finestres i terrasses tencades de manera permanent.</p>
          </div>
          <div className="comment__footer">
            <button className="comment__reply muted-link">
              Responder
            </button>
            <div className="comment__votes">
              <a href="" className="comment__votes--up">
                257
              </a>
              <a href="" className="comment__votes--down">
                257
              </a>
            </div>
          </div>
          <article className="comment comment--nested">
            <div className="comment__header">
              <div className="author-data">
                <div className="author-data__main">
                  <div className="author author--inline">
                    <a href="#" className="author__avatar">
                      <img src="/images/demo-avatar.jpg" alt="" />
                    </a>
                    <a href="#" className="author__name">
                      Maria Garcia
                    </a>
                    <time dateTime="2016-08-01T19:47Z">1-08-2016 21:47</time>
                  </div>
                </div>
                <div className="author-data__extra">
                </div>
              </div>
            </div>
            <div className="comment__content">
              <p>Quan sento parlar de contaminació acústica, penso que no hi ha
                veïns tota la ciutat més perjudicats que nosaltres, els que vivim
                al Pg la Vall d'Hebron des del 198 al 208. Per no parlar de la
                contaminació atmosfèrica, els tubs d'escapament dels vehicles
                gairabé s'evacuarien directament al nostre menjador si no fos que
                mantenim les finestres i terrasses tencades de manera permanent.</p>
            </div>
            <div className="comment__footer">
              <button className="comment__reply muted-link">
                Responder
              </button>
              <div className="comment__votes">
                <a href="" className="comment__votes--up">
                  257
                </a>
                <a href="" className="comment__votes--down">
                  257
                </a>
              </div>
            </div>
          </article>
        </article>
      </article>
      </article>
    </div>
    <div className="show-more show-more--comment-thread">
      <button className="muted-link">
        Ver 16 comentarios más
        <span aria-hidden="true">+</span>
      </button>
    </div>
    <div className="add-comment">
      <h5 className="section-heading">Deixa el teu comentari</h5>
      <div className="opinion-toggle button-group">
        <button className="button small button--muted opinion-toggle--ok">
          Estic a favor
        </button>
        <button className="button small button--muted opinion-toggle--ko">
          Estic en contra
        </button>
      </div>
      <form>
        <label className="show-for-sr" htmlFor="add-comment">Comentari</label>
        <textarea id="add-comment" rows="4"
          placeholder="Què opines d'aquesta proposta?"></textarea>
        <input type="submit" className="button button--sc" value="Enviar" />
      </form>
    </div>
  </section>
);

window.Comments = Comments;
