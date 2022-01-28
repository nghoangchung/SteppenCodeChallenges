export const TwoPaneList = ({ data }) => {
  return (
    // this is a first time i'm used bulma :(
    // i spend too much time to di test 5, but not good and wrong. i miss to dislay content  
    <div className="columns">
      <aside class="menu">
        <ul class="menu-list">
          {data.map((e, i) => (
            <li key={i} >
                  <a class="is-active">{e.title}</a>
                  <ul>
                    {e.content.map((val, index) => (
                      <li key={index}>{val}</li>
                    ))}
                  </ul>
              
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
