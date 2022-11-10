import styles from "./Post.module.css"


export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
          className={styles.avatar} 
          src="https://github.com/diego3g.png"
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="novembro 09 as 9:10h" datetime="2022-05-09">Publicado ha 1h</time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw </a>{' '}
          <a href="#">#rocketseat</a>{' '}
          </p>
      </div> 
      <form className={styles.commentForm}>
        <strong>Deixe deu feedback</strong>
        <textarea placeholder="Deixe seu comentário"/>
        <footer className={styles.footer}>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>   
  )
}