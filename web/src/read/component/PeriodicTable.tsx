import React, { Component } from "react";
import { PeriodicBook } from "./PeriodicBook";
import '../resources/style/read.css'

export class PeriodicTable extends Component {


    // Dimensions of the periodic book
    static NB_ROW = 6
    static NB_COL = 16

    render() {
        return (
            <div className="periodic-table" >

                <ul>
                    <li>
                        <span className="periodic-table-old-testament" >
                            <strong>Old</strong> Testament&nbsp;
                        </span>
                    </li>
                    <li>
                        <table>
                            {this.createPeriodicTable()}
                        </table>
                    </li>
                    <li>
                        <span className="periodic-table-new-testament" >
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

        for (let i = 0; i < PeriodicTable.NB_ROW; i++) {
            let row = []
            for (let j = 0; j < PeriodicTable.NB_COL; j++) {
                if (books[i] && books[i][j])
                    row.push(<td>{books[i][j]}</td>)
                else
                    row.push(<td></td>)
            }
            table.push(<tr>{row}</tr>)
        }
        return table;
    }

    handleClick(id: number) {
        alert("Selected book : " + id)
    }

    createPeriodicBooks = () => {

        // Initialize book map
        let books: any[][] = []
        for (let i = 0; i < PeriodicTable.NB_ROW; i++) {
            books[i] = [];
            for (let j = 0; j < PeriodicTable.NB_COL; j++) {
                books[i][j] = null
            }
        }

        // Register all the books

        // OLD TESTAMENT
        books[0][0] = <PeriodicBook nbChapter={50} onClick={() => this.handleClick(0)} key={0} bigramme="Gn" author="Moses" />
        books[0][1] = <PeriodicBook nbChapter={40} onClick={() => this.handleClick(1)} key={1} bigramme="Ex" author="Moses" />
        books[0][2] = <PeriodicBook nbChapter={27} onClick={() => this.handleClick(2)} key={2} bigramme="Lv" author="Moses" />
        books[0][3] = <PeriodicBook nbChapter={26} onClick={() => this.handleClick(3)} key={3} bigramme="Nu" author="Moses" />
        books[0][4] = <PeriodicBook nbChapter={34} onClick={() => this.handleClick(4)} key={4} bigramme="Dt" author="Moses" author2="Joshua" />

        books[1][0] = <PeriodicBook nbChapter={24} onClick={() => this.handleClick(5)} key={5} bigramme="Js" author="Joshua" />
        books[1][1] = <PeriodicBook nbChapter={21} onClick={() => this.handleClick(6)} key={6} bigramme="Ju" author="Samuel" />
        books[1][2] = <PeriodicBook nbChapter={4} onClick={() => this.handleClick(7)} key={7} bigramme="Ru" author="Samuel" />
        books[1][3] = <PeriodicBook nbChapter={31} onClick={() => this.handleClick(8)} key={8} bigramme="Sa¹" author="Samuel" />
        books[1][4] = <PeriodicBook nbChapter={24} onClick={() => this.handleClick(9)} key={9} bigramme="Sa²" author="Nathan" author2="Gad" />
        books[1][5] = <PeriodicBook nbChapter={22} onClick={() => this.handleClick(10)} key={10} bigramme="Ki¹" author="Jeremiah" />
        books[1][6] = <PeriodicBook nbChapter={25} onClick={() => this.handleClick(11)} key={11} bigramme="Ki²" author="Jeremiah" />

        books[2][0] = <PeriodicBook nbChapter={29} onClick={() => this.handleClick(12)} key={12} bigramme="Ch¹" author="Ezra" />
        books[2][1] = <PeriodicBook nbChapter={36} onClick={() => this.handleClick(13)} key={13} bigramme="Ch²" author="Ezra" />
        books[2][2] = <PeriodicBook nbChapter={10} onClick={() => this.handleClick(14)} key={14} bigramme="Ez" author="Ezra" />
        books[2][3] = <PeriodicBook nbChapter={13} onClick={() => this.handleClick(15)} key={15} bigramme="Ne" author="Ezra" />
        books[2][4] = <PeriodicBook nbChapter={10} onClick={() => this.handleClick(16)} key={16} bigramme="Es" author="Mordecai" />

        books[3][0] = <PeriodicBook nbChapter={42} onClick={() => this.handleClick(17)} key={17} bigramme="Jb" author="Job Eli" author2="Mo Sal" />
        books[3][1] = <PeriodicBook nbChapter={150} onClick={() => this.handleClick(18)} key={18} bigramme="Ps" author="David" author2="Various" />
        books[3][2] = <PeriodicBook nbChapter={31} onClick={() => this.handleClick(19)} key={19} bigramme="Pr" author="Salomon" />
        books[3][3] = <PeriodicBook nbChapter={12} onClick={() => this.handleClick(20)} key={20} bigramme="Ec" author="Salomon" />
        books[3][4] = <PeriodicBook nbChapter={8} onClick={() => this.handleClick(21)} key={21} bigramme="So" author="Salomon" />

        books[4][0] = <PeriodicBook nbChapter={66} onClick={() => this.handleClick(22)} key={22} bigramme="Is" author="Isaiah" />
        books[4][1] = <PeriodicBook nbChapter={52} onClick={() => this.handleClick(23)} key={23} bigramme="Je" author="Jeremiah" />
        books[4][2] = <PeriodicBook nbChapter={5} onClick={() => this.handleClick(24)} key={24} bigramme="La" author="Jeremiah" />
        books[4][3] = <PeriodicBook nbChapter={48} onClick={() => this.handleClick(25)} key={25} bigramme="Ek" author="Ezekiel" />
        books[4][4] = <PeriodicBook nbChapter={12} onClick={() => this.handleClick(26)} key={26} bigramme="Da" author="Daniel" />

        books[5][0] = <PeriodicBook nbChapter={14} onClick={() => this.handleClick(27)} key={27} bigramme="Ho" author="Hosea" />
        books[5][1] = <PeriodicBook nbChapter={3} onClick={() => this.handleClick(28)} key={28} bigramme="Jl" author="Joel" />
        books[5][2] = <PeriodicBook nbChapter={9} onClick={() => this.handleClick(29)} key={29} bigramme="Am" author="Amos" />
        books[5][3] = <PeriodicBook nbChapter={1} onClick={() => this.handleClick(30)} key={30} bigramme="Ob" author="Obadiah" />
        books[5][4] = <PeriodicBook nbChapter={4} onClick={() => this.handleClick(31)} key={31} bigramme="Jh" author="Jonah" />
        books[5][5] = <PeriodicBook nbChapter={7} onClick={() => this.handleClick(32)} key={32} bigramme="Mi" author="Micah" />
        books[5][6] = <PeriodicBook nbChapter={3} onClick={() => this.handleClick(33)} key={33} bigramme="Na" author="Nahum" />
        books[5][7] = <PeriodicBook nbChapter={3} onClick={() => this.handleClick(34)} key={34} bigramme="Hk" author="Habakkuk" />
        books[5][8] = <PeriodicBook nbChapter={3} onClick={() => this.handleClick(35)} key={35} bigramme="Zp" author="Zephaniah" />
        books[5][9] = <PeriodicBook nbChapter={2} onClick={() => this.handleClick(36)} key={36} bigramme="Ha" author="Haggai" />
        books[5][10] = <PeriodicBook nbChapter={14} onClick={() => this.handleClick(37)} key={37} bigramme="Zc" author="Zechariah" />
        books[5][11] = <PeriodicBook nbChapter={4} onClick={() => this.handleClick(38)} key={38} bigramme="Ml" author="Malachi" />

        // NEW TESTAMENT

        books[0][12] = <PeriodicBook nbChapter={28} onClick={() => this.handleClick(39)} key={39} bigramme="Mt" author="Matthew" />
        books[0][13] = <PeriodicBook nbChapter={16} onClick={() => this.handleClick(40)} key={40} bigramme="Mk" author="Mark" />
        books[0][14] = <PeriodicBook nbChapter={24} onClick={() => this.handleClick(41)} key={41} bigramme="Lk" author="Luke" />
        books[0][15] = <PeriodicBook nbChapter={21} onClick={() => this.handleClick(42)} key={42} bigramme="Jn" author="John" />

        books[1][15] = <PeriodicBook nbChapter={28} onClick={() => this.handleClick(43)} key={43} bigramme="Ac" author="Luke" />

        books[2][10] = <PeriodicBook nbChapter={16} onClick={() => this.handleClick(44)} key={44} bigramme="Ro" author="Paul" />
        books[2][11] = <PeriodicBook nbChapter={16} onClick={() => this.handleClick(45)} key={45} bigramme="Co¹" author="Paul" />
        books[2][12] = <PeriodicBook nbChapter={13} onClick={() => this.handleClick(46)} key={46} bigramme="Co²" author="Paul" />
        books[2][13] = <PeriodicBook nbChapter={6} onClick={() => this.handleClick(47)} key={47} bigramme="Ga" author="Paul" />
        books[2][14] = <PeriodicBook nbChapter={6} onClick={() => this.handleClick(48)} key={48} bigramme="Ep" author="Paul" />
        books[2][15] = <PeriodicBook nbChapter={4} onClick={() => this.handleClick(49)} key={49} bigramme="Pp" author="Paul" />

        books[3][9] = <PeriodicBook nbChapter={4} onClick={() => this.handleClick(50)} key={50} bigramme="Cl" author="Paul" />
        books[3][10] = <PeriodicBook nbChapter={5} onClick={() => this.handleClick(51)} key={51} bigramme="Th¹" author="Paul" />
        books[3][11] = <PeriodicBook nbChapter={3} onClick={() => this.handleClick(52)} key={52} bigramme="Th²" author="Paul" />
        books[3][12] = <PeriodicBook nbChapter={6} onClick={() => this.handleClick(53)} key={53} bigramme="Ti¹" author="Paul" />
        books[3][13] = <PeriodicBook nbChapter={4} onClick={() => this.handleClick(54)} key={54} bigramme="Ti²" author="Paul" />
        books[3][14] = <PeriodicBook nbChapter={3} onClick={() => this.handleClick(55)} key={55} bigramme="Tt" author="Paul" />
        books[3][15] = <PeriodicBook nbChapter={1} onClick={() => this.handleClick(56)} key={56} bigramme="Pm" author="Paul" />

        books[4][8] = <PeriodicBook nbChapter={13} onClick={() => this.handleClick(57)} key={57} bigramme="Hb" author="Paul Apollos" author2="Luke Barnabas" />
        books[4][9] = <PeriodicBook nbChapter={5} onClick={() => this.handleClick(58)} key={58} bigramme="Ja" author="James" />
        books[4][10] = <PeriodicBook nbChapter={5} onClick={() => this.handleClick(59)} key={59} bigramme="Pe¹" author="Peter" />
        books[4][11] = <PeriodicBook nbChapter={3} onClick={() => this.handleClick(60)} key={60} bigramme="Pe²" author="Peter" />
        books[4][12] = <PeriodicBook nbChapter={5} onClick={() => this.handleClick(61)} key={61} bigramme="Jn¹" author="John" />
        books[4][13] = <PeriodicBook nbChapter={1} onClick={() => this.handleClick(62)} key={62} bigramme="Jn²" author="John" />
        books[4][14] = <PeriodicBook nbChapter={1} onClick={() => this.handleClick(63)} key={63} bigramme="Jn³" author="John" />
        books[4][15] = <PeriodicBook nbChapter={1} onClick={() => this.handleClick(64)} key={64} bigramme="Ju" author="Jude" />

        books[5][15] = <PeriodicBook nbChapter={22} onClick={() => this.handleClick(65)} key={65} bigramme="Re" author="John" />

        return books
    }

}