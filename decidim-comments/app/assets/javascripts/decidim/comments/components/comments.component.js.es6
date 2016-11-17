const Comments = () => (
  <div className="columns large-9" id="comments">
    <FeaturedComment></FeaturedComment>
    <section className="comments">
      <div className="row collapse order-by">
        <h2 className="order-by__text section-heading">132 comentaris - 
          <span className="order-by__tabs">
            <a href="#" className="order-by__tab">a favor</a>
            <a href="#" className="order-by__tab">en contra</a>
          </span>
        </h2>
        <div className="order-by__dropdown order-by__dropdown--right">
          <span className="order-by__text">Ordenar per:</span>
          <ul className="dropdown menu" data-dropdown-menu>
            <li>
              <a href="#">Més votats</a>
              <ul className="menu">
                <li><a href="#">Més votats</a></li>
                <li><a href="#">Més nous</a></li>
                <li><a href="#">Més antics</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="comment-thread">
        <Comment></Comment>
      </div>
      <h6 className="comment-thread__title">
        Conversación con <a href="">Maria Garcia</a></h6>
      <div className="comment-thread">
        <Comment></Comment>
      </div>
      <div className="show-more show-more--comment-thread">
        <button className="muted-link">
          Ver 16 comentarios más
          <span aria-hidden="true">+</span>
        </button>
      </div>
      <AddCommentForm></AddCommentForm>
    </section>
  </div>
);
