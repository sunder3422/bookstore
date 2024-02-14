
export default function Bookform()
{
    return(
        <div>
             <form action="addBook" method="post">
            <input type="text" name="bookId"/>
            <input type="text" name="bookName"/>
            <input type="text" name="bookAuthor"/>
            <input type="text" name="bookDesc"/>
            <input type="submit" value="submit"/>
            
        </form>
        </div>
    );
}