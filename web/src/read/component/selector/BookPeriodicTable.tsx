import React, {Component} from "react";
import {BookBox} from "./BookBox";
import '../../resources/style/selector.css'
import {Key} from "../../../common/utils/key";

type BookPeriodicTableProp = {
    handleBookSelect: (bookid: number) => void,
}

export class BookPeriodicTable extends Component<BookPeriodicTableProp> {

    // Dimensions of the periodic book
    static NB_ROW = 6
    static NB_COL = 16

    render() {
        return (
            <div className="periodic-table">

                <ul>
                    <li>
                        <span className="periodic-table-old-testament">
                            <strong>Old</strong> Testament&nbsp;
                        </span>
                    </li>
                    <li>
                        <table>
                            <tbody>
                            {this.createPeriodicTable()}
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <span className="periodic-table-new-testament">
                            <strong>New</strong> Testament
                        </span>
                    </li>
                </ul>
            </div>
        );
    }

    createPeriodicTable = () => {
        let table = []
        let books = this.createPeriodicBooks()

        for (let i = 0; i < BookPeriodicTable.NB_ROW; i++) {
            let row = []
            for (let j = 0; j < BookPeriodicTable.NB_COL; j++) {
                if (books[i] && books[i][j])
                    row.push(<td key={Key.getKey("book", (i.toString()) + (j.toString()))}>{books[i][j]}</td>)
                else
                    row.push(<td key={Key.getKey("book", (i.toString()) + (j.toString()))}></td>)
            }
            table.push(<tr key={Key.getKey("row", i)}>{row}</tr>)
        }
        return table;
    }

    handleClick(id: number) {
        this.props.handleBookSelect(id)
    }

    createPeriodicBooks = () => {

        // Initialize book map
        let books: any[][] = []
        for (let i = 0; i < BookPeriodicTable.NB_ROW; i++) {
            books[i] = [];
            for (let j = 0; j < BookPeriodicTable.NB_COL; j++) {
                books[i][j] = null
            }
        }

        // Register all the books

        // OLD TESTAMENT
        books[0][0] = <BookBox nbChapter={50} onClick={() => this.handleClick(1)} key={0} bigramme="Gn" author="Moses"/>
        books[0][1] = <BookBox nbChapter={40} onClick={() => this.handleClick(2)} key={1} bigramme="Ex" author="Moses"/>
        books[0][2] = <BookBox nbChapter={27} onClick={() => this.handleClick(3)} key={2} bigramme="Lv" author="Moses"/>
        books[0][3] = <BookBox nbChapter={26} onClick={() => this.handleClick(4)} key={3} bigramme="Nu" author="Moses"/>
        books[0][4] = <BookBox nbChapter={34} onClick={() => this.handleClick(5)} key={4} bigramme="Dt" author="Moses"
                               author2="Joshua"/>

        books[1][0] =
            <BookBox nbChapter={24} onClick={() => this.handleClick(6)} key={5} bigramme="Js" author="Joshua"/>
        books[1][1] =
            <BookBox nbChapter={21} onClick={() => this.handleClick(7)} key={6} bigramme="Ju" author="Samuel"/>
        books[1][2] = <BookBox nbChapter={4} onClick={() => this.handleClick(8)} key={7} bigramme="Ru" author="Samuel"/>
        books[1][3] =
            <BookBox nbChapter={31} onClick={() => this.handleClick(9)} key={8} bigramme="Sa¹" author="Samuel"/>
        books[1][4] =
            <BookBox nbChapter={24} onClick={() => this.handleClick(10)} key={9} bigramme="Sa²" author="Nathan"
                     author2="Gad"/>
        books[1][5] =
            <BookBox nbChapter={22} onClick={() => this.handleClick(11)} key={10} bigramme="Ki¹" author="Jeremiah"/>
        books[1][6] =
            <BookBox nbChapter={25} onClick={() => this.handleClick(12)} key={11} bigramme="Ki²" author="Jeremiah"/>

        books[2][0] =
            <BookBox nbChapter={29} onClick={() => this.handleClick(13)} key={12} bigramme="Ch¹" author="Ezra"/>
        books[2][1] =
            <BookBox nbChapter={36} onClick={() => this.handleClick(14)} key={13} bigramme="Ch²" author="Ezra"/>
        books[2][2] =
            <BookBox nbChapter={10} onClick={() => this.handleClick(15)} key={14} bigramme="Ez" author="Ezra"/>
        books[2][3] =
            <BookBox nbChapter={13} onClick={() => this.handleClick(16)} key={15} bigramme="Ne" author="Ezra"/>
        books[2][4] =
            <BookBox nbChapter={10} onClick={() => this.handleClick(17)} key={16} bigramme="Es" author="Mordecai"/>

        books[3][0] =
            <BookBox nbChapter={42} onClick={() => this.handleClick(18)} key={17} bigramme="Jb" author="Job Eli"
                     author2="Mo Sal"/>
        books[3][1] =
            <BookBox nbChapter={150} onClick={() => this.handleClick(19)} key={18} bigramme="Ps" author="David"
                     author2="Various"/>
        books[3][2] =
            <BookBox nbChapter={31} onClick={() => this.handleClick(20)} key={19} bigramme="Pr" author="Salomon"/>
        books[3][3] =
            <BookBox nbChapter={12} onClick={() => this.handleClick(21)} key={20} bigramme="Ec" author="Salomon"/>
        books[3][4] =
            <BookBox nbChapter={8} onClick={() => this.handleClick(22)} key={21} bigramme="So" author="Salomon"/>

        books[4][0] =
            <BookBox nbChapter={66} onClick={() => this.handleClick(23)} key={22} bigramme="Is" author="Isaiah"/>
        books[4][1] =
            <BookBox nbChapter={52} onClick={() => this.handleClick(24)} key={23} bigramme="Je" author="Jeremiah"/>
        books[4][2] =
            <BookBox nbChapter={5} onClick={() => this.handleClick(25)} key={24} bigramme="La" author="Jeremiah"/>
        books[4][3] =
            <BookBox nbChapter={48} onClick={() => this.handleClick(26)} key={25} bigramme="Ek" author="Ezekiel"/>
        books[4][4] =
            <BookBox nbChapter={12} onClick={() => this.handleClick(27)} key={26} bigramme="Da" author="Daniel"/>

        books[5][0] =
            <BookBox nbChapter={14} onClick={() => this.handleClick(28)} key={27} bigramme="Ho" author="Hosea"/>
        books[5][1] = <BookBox nbChapter={3} onClick={() => this.handleClick(29)} key={28} bigramme="Jl" author="Joel"/>
        books[5][2] = <BookBox nbChapter={9} onClick={() => this.handleClick(30)} key={29} bigramme="Am" author="Amos"/>
        books[5][3] =
            <BookBox nbChapter={1} onClick={() => this.handleClick(31)} key={30} bigramme="Ob" author="Obadiah"/>
        books[5][4] =
            <BookBox nbChapter={4} onClick={() => this.handleClick(32)} key={31} bigramme="Jh" author="Jonah"/>
        books[5][5] =
            <BookBox nbChapter={7} onClick={() => this.handleClick(33)} key={32} bigramme="Mi" author="Micah"/>
        books[5][6] =
            <BookBox nbChapter={3} onClick={() => this.handleClick(34)} key={33} bigramme="Na" author="Nahum"/>
        books[5][7] =
            <BookBox nbChapter={3} onClick={() => this.handleClick(35)} key={34} bigramme="Hk" author="Habakkuk"/>
        books[5][8] =
            <BookBox nbChapter={3} onClick={() => this.handleClick(36)} key={35} bigramme="Zp" author="Zephaniah"/>
        books[5][9] =
            <BookBox nbChapter={2} onClick={() => this.handleClick(37)} key={36} bigramme="Ha" author="Haggai"/>
        books[5][10] =
            <BookBox nbChapter={14} onClick={() => this.handleClick(38)} key={37} bigramme="Zc" author="Zechariah"/>
        books[5][11] =
            <BookBox nbChapter={4} onClick={() => this.handleClick(39)} key={38} bigramme="Ml" author="Malachi"/>

        // NEW TESTAMENT

        books[0][12] =
            <BookBox nbChapter={28} onClick={() => this.handleClick(40)} key={39} bigramme="Mt" author="Matthew"/>
        books[0][13] =
            <BookBox nbChapter={16} onClick={() => this.handleClick(41)} key={40} bigramme="Mk" author="Mark"/>
        books[0][14] =
            <BookBox nbChapter={24} onClick={() => this.handleClick(42)} key={41} bigramme="Lk" author="Luke"/>
        books[0][15] =
            <BookBox nbChapter={21} onClick={() => this.handleClick(43)} key={42} bigramme="Jn" author="John"/>

        books[1][15] =
            <BookBox nbChapter={28} onClick={() => this.handleClick(44)} key={43} bigramme="Ac" author="Luke"/>

        books[2][10] =
            <BookBox nbChapter={16} onClick={() => this.handleClick(45)} key={44} bigramme="Ro" author="Paul"/>
        books[2][11] =
            <BookBox nbChapter={16} onClick={() => this.handleClick(46)} key={45} bigramme="Co¹" author="Paul"/>
        books[2][12] =
            <BookBox nbChapter={13} onClick={() => this.handleClick(47)} key={46} bigramme="Co²" author="Paul"/>
        books[2][13] =
            <BookBox nbChapter={6} onClick={() => this.handleClick(48)} key={47} bigramme="Ga" author="Paul"/>
        books[2][14] =
            <BookBox nbChapter={6} onClick={() => this.handleClick(49)} key={48} bigramme="Ep" author="Paul"/>
        books[2][15] =
            <BookBox nbChapter={4} onClick={() => this.handleClick(50)} key={49} bigramme="Pp" author="Paul"/>

        books[3][9] = <BookBox nbChapter={4} onClick={() => this.handleClick(51)} key={50} bigramme="Cl" author="Paul"/>
        books[3][10] =
            <BookBox nbChapter={5} onClick={() => this.handleClick(52)} key={51} bigramme="Th¹" author="Paul"/>
        books[3][11] =
            <BookBox nbChapter={3} onClick={() => this.handleClick(53)} key={52} bigramme="Th²" author="Paul"/>
        books[3][12] =
            <BookBox nbChapter={6} onClick={() => this.handleClick(54)} key={53} bigramme="Ti¹" author="Paul"/>
        books[3][13] =
            <BookBox nbChapter={4} onClick={() => this.handleClick(55)} key={54} bigramme="Ti²" author="Paul"/>
        books[3][14] =
            <BookBox nbChapter={3} onClick={() => this.handleClick(56)} key={55} bigramme="Tt" author="Paul"/>
        books[3][15] =
            <BookBox nbChapter={1} onClick={() => this.handleClick(57)} key={56} bigramme="Pm" author="Paul"/>

        books[4][8] =
            <BookBox nbChapter={13} onClick={() => this.handleClick(58)} key={57} bigramme="Hb" author="Paul Ap."
                     author2="Luke Bbas"/>
        books[4][9] =
            <BookBox nbChapter={5} onClick={() => this.handleClick(59)} key={58} bigramme="Ja" author="James"/>
        books[4][10] =
            <BookBox nbChapter={5} onClick={() => this.handleClick(60)} key={59} bigramme="Pe¹" author="Peter"/>
        books[4][11] =
            <BookBox nbChapter={3} onClick={() => this.handleClick(61)} key={60} bigramme="Pe²" author="Peter"/>
        books[4][12] =
            <BookBox nbChapter={5} onClick={() => this.handleClick(62)} key={61} bigramme="Jn¹" author="John"/>
        books[4][13] =
            <BookBox nbChapter={1} onClick={() => this.handleClick(63)} key={62} bigramme="Jn²" author="John"/>
        books[4][14] =
            <BookBox nbChapter={1} onClick={() => this.handleClick(64)} key={63} bigramme="Jn³" author="John"/>
        books[4][15] =
            <BookBox nbChapter={1} onClick={() => this.handleClick(65)} key={64} bigramme="Ju" author="Jude"/>

        books[5][15] =
            <BookBox nbChapter={22} onClick={() => this.handleClick(66)} key={65} bigramme="Re" author="John"/>

        return books
    }

}