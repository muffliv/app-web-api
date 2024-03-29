import Input from '../components/form/Input';
import styles from './NovoLivro.module.css'

function NovoLivro() {
    return(
        <section className={styles.novo_livro_container}>
            <h1>Cadastro de Livro</h1>
            <form>

                <Input
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite o título do livro'
                    text='Digite o título'
                />

                <Input
                    type='text'
                    name='nome_autor'
                    id='nome_autor'
                    placeholder='Digite o nome do autor'
                    text='Digite o nome do autor'
                />

                <Input
                    type='text'
                    name='descricao_livro'
                    id='descricao_livro'
                    placeholder='Digite a descricao do livro'
                    text='Digite a descricao do livro'
                />

                {/* <p>
                    <input type='text' placeholder='Nome do livro'/>
                </p>

                <p>
                    <input type='text' placeholder='Nome do autor'/>
                </p>

                <p>
                    <input type='text' placeholder='Descrição do livro'/>
                </p> */}

                <p>
                    <input type='submit' value='Cadastrar Livro'/>
                </p>
            </form>
        </section>
    );
}

export default NovoLivro;