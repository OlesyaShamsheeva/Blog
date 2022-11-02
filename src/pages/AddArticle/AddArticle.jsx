import { CreateArticle } from './CreateArticle';
import { ArticleFile } from './ArticleFile';
import { PhotoArticle } from '../../components/PhotoArticle';

import { useAddArticle } from './AddArticle.utils';
import styles from './AddArticle.module.css'
import { articleApi } from '../../store/article/article.api';


export const AddArticle = ({ inputRegistr = false }) => {

  const [createArticle,{}]=articleApi.useCreateArticleMutation({

  })
  const {
    file,
    article,
    setArticle,
    articleFormInputs,
    submitFormArticle,
    handleGetEnter,
    handleImageChange,
    handleDeleteImage,
  } = useAddArticle()
const handleCreate=async ()=>{
await createArticle({article,body:article})
}
  return (
    <div className={styles.wrap}>
      <h1 className={styles.caption}>
        Add article
      </h1>
      <form onSubmit={submitFormArticle}>
        <div className={styles.inputAdd}>
          {articleFormInputs.map((input) =>
            <ArticleFile
              key={input.id}
              name={input.name}
              input={input}
              inputRegistr={false}
              onChange={handleGetEnter}/>
          )}
        </div>
        <div className={styles.textadd}>
          <CreateArticle
            setFormData={setArticle}/>
        </div>
        <PhotoArticle
          onChange={handleImageChange}
          onDelete={handleDeleteImage}
        />
        <div>
          <>
            {article.imgArticle ?
              file?.name : ''}
          </>
        </div>
        <button
          className={styles.buttonPublish} onClick={handleCreate}>
          Publish an article
        </button>
      </form>
    </div>
  );
}
