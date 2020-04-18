import React, { Component } from "react";
import { PeriodicBook } from "./PeriodicBook";
import '../resources/style/read.css'

export class PeriodicTable extends Component {


    // Dimensions of the periodic book
    static NB_ROW = 6
    static NB_COL = 16

    render() {
        return (
            <div className="perdiodic-table" >
                <table>
                    {this.createPeriodicTable()}
                </table>
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
        books[0][0] = <PeriodicBook key={0} bigramme="Gn" name="Genesis" />
        books[0][1] = <PeriodicBook key={1} bigramme="Ex" name="Genesis" />
        books[0][2] = <PeriodicBook key={2} bigramme="Lv" name="Genesis" />
        books[0][3] = <PeriodicBook key={3} bigramme="Nu" name="Genesis" />
        books[0][4] = <PeriodicBook key={4} bigramme="Dt" name="Genesis" />

        books[1][0] = <PeriodicBook key={5} bigramme="Js" name="Genesis" />
        books[1][1] = <PeriodicBook key={6} bigramme="Ju" name="Genesis" />
        books[1][2] = <PeriodicBook key={7} bigramme="Ru" name="Genesis" />
        books[1][3] = <PeriodicBook key={8} bigramme="Sa¹" name="Genesis" />
        books[1][4] = <PeriodicBook key={9} bigramme="Sa²" name="Genesis" />
        books[1][5] = <PeriodicBook key={10} bigramme="Ki¹" name="Genesis" />
        books[1][6] = <PeriodicBook key={11} bigramme="Ki²" name="Genesis" />

        books[2][0] = <PeriodicBook key={12} bigramme="Ch¹" name="Genesis" />
        books[2][1] = <PeriodicBook key={13} bigramme="Ch²" name="Genesis" />
        books[2][2] = <PeriodicBook key={14} bigramme="Ez" name="Genesis" />
        books[2][3] = <PeriodicBook key={15} bigramme="Ne" name="Genesis" />
        books[2][4] = <PeriodicBook key={16} bigramme="Es" name="Genesis" />

        books[3][0] = <PeriodicBook key={17} bigramme="Jb" name="Genesis" />
        books[3][1] = <PeriodicBook key={18} bigramme="Ps" name="Genesis" />
        books[3][2] = <PeriodicBook key={19} bigramme="Pr" name="Genesis" />
        books[3][3] = <PeriodicBook key={20} bigramme="Ec" name="Genesis" />
        books[3][4] = <PeriodicBook key={21} bigramme="So" name="Genesis" />

        books[4][0] = <PeriodicBook key={22} bigramme="Is" name="Genesis" />
        books[4][1] = <PeriodicBook key={23} bigramme="Je" name="Genesis" />
        books[4][2] = <PeriodicBook key={24} bigramme="La" name="Genesis" />
        books[4][3] = <PeriodicBook key={25} bigramme="Ek" name="Genesis" />
        books[4][4] = <PeriodicBook key={26} bigramme="Da" name="Genesis" />

        books[5][0] = <PeriodicBook key={27} bigramme="Is" name="Genesis" />
        books[5][1] = <PeriodicBook key={28} bigramme="Je" name="Genesis" />
        books[5][2] = <PeriodicBook key={29} bigramme="La" name="Genesis" />
        books[5][3] = <PeriodicBook key={30} bigramme="Ek" name="Genesis" />
        books[5][4] = <PeriodicBook key={31} bigramme="Da" name="Genesis" />
        books[5][5] = <PeriodicBook key={32} bigramme="Is" name="Genesis" />
        books[5][6] = <PeriodicBook key={33} bigramme="Je" name="Genesis" />
        books[5][7] = <PeriodicBook key={34} bigramme="La" name="Genesis" />
        books[5][8] = <PeriodicBook key={35} bigramme="Ek" name="Genesis" />
        books[5][9] = <PeriodicBook key={36} bigramme="Da" name="Genesis" />
        books[5][10] = <PeriodicBook key={37} bigramme="Is" name="Genesis" />
        books[5][11] = <PeriodicBook key={38} bigramme="Je" name="Genesis" />
        books[5][12] = <PeriodicBook key={39} bigramme="La" name="Genesis" />
        books[5][13] = <PeriodicBook key={40} bigramme="Ek" name="Genesis" />
        books[5][14] = <PeriodicBook key={41} bigramme="Da" name="Genesis" />


        // NEW TESTAMENT

        books[0][12] = <PeriodicBook key={0} bigramme="Mt" name="Genesis" />
        books[0][13] = <PeriodicBook key={1} bigramme="Mk" name="Genesis" />
        books[0][14] = <PeriodicBook key={2} bigramme="Lk" name="Genesis" />
        books[0][15] = <PeriodicBook key={3} bigramme="Jn" name="Genesis" />

        books[1][15] = <PeriodicBook key={3} bigramme="Ac" name="Genesis" />

        books[2][10] = <PeriodicBook key={0} bigramme="Ro" name="Genesis" />
        books[2][11] = <PeriodicBook key={1} bigramme="Co¹" name="Genesis" />
        books[2][12] = <PeriodicBook key={0} bigramme="Co²" name="Genesis" />
        books[2][13] = <PeriodicBook key={1} bigramme="Ga" name="Genesis" />
        books[2][14] = <PeriodicBook key={2} bigramme="Ep" name="Genesis" />
        books[2][15] = <PeriodicBook key={3} bigramme="Pp" name="Genesis" />

        books[3][9] = <PeriodicBook key={0} bigramme="Cl" name="Genesis" />
        books[3][10] = <PeriodicBook key={0} bigramme="Th¹" name="Genesis" />
        books[3][11] = <PeriodicBook key={1} bigramme="Th²" name="Genesis" />
        books[3][12] = <PeriodicBook key={0} bigramme="Ti¹" name="Genesis" />
        books[3][13] = <PeriodicBook key={1} bigramme="Ti²" name="Genesis" />
        books[3][14] = <PeriodicBook key={2} bigramme="Tt" name="Genesis" />
        books[3][15] = <PeriodicBook key={3} bigramme="Pm" name="Genesis" />

        books[4][8] = <PeriodicBook key={0} bigramme="Hb" name="Genesis" />
        books[4][9] = <PeriodicBook key={0} bigramme="Ja" name="Genesis" />
        books[4][10] = <PeriodicBook key={0} bigramme="Pe¹" name="Genesis" />
        books[4][11] = <PeriodicBook key={1} bigramme="Pe²" name="Genesis" />
        books[4][12] = <PeriodicBook key={0} bigramme="Jn¹" name="Genesis" />
        books[4][13] = <PeriodicBook key={1} bigramme="Jn²" name="Genesis" />
        books[4][14] = <PeriodicBook key={2} bigramme="Jn³" name="Genesis" />
        books[4][15] = <PeriodicBook key={3} bigramme="Ju" name="Genesis" />

        books[5][15] = <PeriodicBook key={3} bigramme="Re" name="Genesis" />

        return books
    }

}